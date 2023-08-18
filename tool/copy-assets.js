import "zx/globals";
import { fileURLToPath } from "node:url";

const updateSourceMapUrl = (cssFile, newUrl) => {
  // Read the CSS file into a string.
  const cssString = fs.readFileSync(cssFile, 'utf-8');

  // Find the sourceMappingURL comment.
  const match = /\/\*# sourceMappingURL=([^\*]+)\*\//.exec(cssString);
  if (!match) {
    throw new Error('Could not find sourceMappingURL comment in CSS file');
  }

  // Update the URL in the comment.
  const updatedUrl = match[1];

  // Replace the old URL with the new URL in the comment.
  const replacedString = cssString.replace(match[0], `/*# sourceMappingURL=${newUrl} */`);

  // Write the updated CSS file to disk.
  fs.writeFileSync(cssFile, replacedString);
}

const copyDesignSystem = () => {
  const designSystem = {
    css: {
      inputDirectory: fileURLToPath(new URL("../packages/design-system/css/lib", import.meta.url)),
      outputDirectory: fileURLToPath(new URL("../public/packages/design-system/css/lib", import.meta.url))
    },
    js: {
      inputDirectory: fileURLToPath(new URL("../packages/design-system/lib", import.meta.url)),
      outputDirectory: fileURLToPath(new URL("../public/packages/design-system/lib", import.meta.url))
    }
  };

  fs.copySync(designSystem.css.inputDirectory, designSystem.css.outputDirectory);
  fs.copySync(designSystem.js.inputDirectory, designSystem.js.outputDirectory);

  // Bug fix: Update the source map URL for the CSS
  updateSourceMapUrl(`${designSystem.css.outputDirectory}/material-theme/index.css`, './index.css.map');
};

const copyFrontEnd = () => {
  const frontEndModule = {
    js: {
      inputDirectory: fileURLToPath(new URL("../packages/web-frontend/lib", import.meta.url)),
      outputDirectory: fileURLToPath(new URL("../public/packages/web-frontend/lib", import.meta.url))
    },
    importMaps: {
      inputDirectory: fileURLToPath(new URL("../packages/web-frontend/importmaps", import.meta.url)),
      outputDirectory: fileURLToPath(new URL("../public/packages/web-frontend/importmaps", import.meta.url))
    }
  };

  fs.copySync(frontEndModule.js.inputDirectory, frontEndModule.js.outputDirectory);
  fs.copySync(frontEndModule.importMaps.inputDirectory, frontEndModule.importMaps.outputDirectory);
};

copyDesignSystem();
copyFrontEnd();