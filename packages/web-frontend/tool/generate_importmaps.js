import 'zx/globals';
import { fileURLToPath } from "node:url";
import { Generator } from '@jspm/generator';

const generatorConfig = {
  devModeEnabled: true,
  prodModeEnabled: true,
  packages: [
    {
      target: "./packages/design-system",
      alias: "@dropbear/web-design-system"
    },
    {
      target: "./packages/web-frontend/lib/services/firebase.js",
      alias: "./packages/web-frontend/lib/services/firebase.js",
    },
    {
      target: "./packages/web-frontend/lib/services/csa.js",
      alias: "./packages/web-frontend/lib/services/csa.js",
    },
    {
      target: "./packages/web-frontend",
      alias: "@dropbear/web-frontend",
    }
  ]
}

class ImportMapGenerator {
  #config = generatorConfig;

  async run(){
    if (this.#config.devModeEnabled) {
      const generator = await this.#createDevelopmentGenerator();
      const fileContents = JSON.stringify(generator.getMap(), null, 2);
      this.#writeFile("../importmaps/importmap-dev.json", fileContents);
    }

    if (this.#config.prodModeEnabled) {
      const generator = await this.#createProductionGenerator();
      const fileContents = JSON.stringify(generator.getMap(), null, 2);
      this.#writeFile("../importmaps/importmap-prod.json", fileContents);
    }
  }

  #writeFile(path, fileContents){
    const outputFilePath = fileURLToPath(new URL(path, import.meta.url));
    fs.outputFileSync(outputFilePath, fileContents);
    console.log(`Import map created: ${outputFilePath}`);
  }

  async #createDevelopmentGenerator(){
    const developmentGenerator = new Generator({
      mapUrl: this.importMapUrl,
      defaultProvider: 'jspm',
      env: ['development', 'browser', 'module']
    });

    for await (const jsPackage of this.#config.packages){
      await developmentGenerator.install({
        target: jsPackage.target,
        alias: jsPackage.alias
      });
    }

    return developmentGenerator;
  }

  async #createProductionGenerator(){
    const productionGenerator = new Generator({
      mapUrl: this.importMapUrl,
      defaultProvider: 'jspm',
      env: ['production', 'browser', 'module']
    });

    for await (const jsPackage of this.#config.packages){
      await productionGenerator.install({
        target: jsPackage.target,
        alias: jsPackage.alias
      });
    }

    return productionGenerator;
  }

  // The URL of the import map, for normalising relative URLs:
  get importMapUrl() {
    return new URL('../../../', import.meta.url);
  }
}

const generator = new ImportMapGenerator();
await generator.run();