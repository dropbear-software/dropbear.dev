import { fileURLToPath } from "node:url";
import { writeFileSync } from "node:fs"
import { Hct, themeFromSourceColor, rgbaFromArgb } from "@material/material-color-utilities";

const outputFilePath = new URL("../css/src/material-theme/color/color-tokens.css", import.meta.url);

class ColorPaletteGenerator {
  #brandHct;

  #brandTheme;

  #outputFile;

  constructor(config){
    this.#brandHct = Hct.from(config.hue, config.chroma, config.tone);
    this.#brandTheme = themeFromSourceColor(this.#brandHct);
    this.#outputFile = fileURLToPath(outputFilePath);
  }

  get fileContents(){
    return `@layer design-system.reference.color {
  :root, :host {
    /* Primary Accent Color Tokens */
    --primary-color-source: ${this.#cssRgbFromHct(this.#brandTheme.palettes.primary.keyColor)};

    /* Dark */
    --md-ref-color-primary-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(80))};
    --md-ref-color-primary-container-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(30))};
    --md-ref-color-on-primary-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(20))};
    --md-ref-color-on-primary-container-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(90))};
    --md-ref-color-inverse-primary-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(40))};

    /* Light */
    --md-ref-color-primary-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(40))};
    --md-ref-color-primary-container-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(90))};
    --md-ref-color-on-primary-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(100))};
    --md-ref-color-on-primary-container-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(10))};
    --md-ref-color-inverse-primary-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(80))};

    /* Secondary Color Tokens */
    --secondary-color-source: ${this.#cssRgbFromHct(this.#brandTheme.palettes.secondary.keyColor)};

    /* Dark */
    --md-ref-color-secondary-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(80))};
    --md-ref-color-secondary-container-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(30))};
    --md-ref-color-on-secondary-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(20))};
    --md-ref-color-on-secondary-container-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(90))};
    --md-ref-color-inverse-secondary-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(40))};

    /* Light */
    --md-ref-color-secondary-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(40))};
    --md-ref-color-secondary-container-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(90))};
    --md-ref-color-on-secondary-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(100))};
    --md-ref-color-on-secondary-container-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(10))};
    --md-ref-color-inverse-secondary-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.secondary.tone(80))};

    /* Tertiary Color Tokens */
    --tertiary-color-source: ${this.#cssRgbFromHct(this.#brandTheme.palettes.tertiary.keyColor)};

    /* Dark */
    --md-ref-color-tertiary-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(80))};
    --md-ref-color-tertiary-container-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(30))};
    --md-ref-color-on-tertiary-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(20))};
    --md-ref-color-on-tertiary-container-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(90))};
    --md-ref-color-inverse-tertiary-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(40))};

    /* Light */
    --md-ref-color-tertiary-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(40))};
    --md-ref-color-tertiary-container-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(90))};
    --md-ref-color-on-tertiary-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(100))};
    --md-ref-color-on-tertiary-container-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(10))};
    --md-ref-color-inverse-tertiary-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(80))};

    /* Surface Color Tokens */
    --neutral-color-source:  ${this.#cssRgbFromHct(this.#brandTheme.palettes.neutral.keyColor)};
    --neutral-variant-color-source: ${this.#cssRgbFromHct(this.#brandTheme.palettes.neutralVariant.keyColor)};

    /* Dark */
    --md-ref-color-surface-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(6))};
    --md-ref-color-surface-dim-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(6))};
    --md-ref-color-surface-bright-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(24))};
    --md-ref-color-surface-container-lowest-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(4))};
    --md-ref-color-surface-container-low-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(10))};
    --md-ref-color-surface-container-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(12))};
    --md-ref-color-surface-container-high-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(17))};
    --md-ref-color-surface-container-highest-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(22))};
    --md-ref-color-surface-variant-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutralVariant.tone(30))};
    --md-ref-color-on-surface-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(90))};
    --md-ref-color-on-surface-variant-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(80))};
    --md-ref-color-inverse-surface-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(90))};
    --md-ref-color-inverse-on-surface-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(20))};
    --md-ref-color-background-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(6))};
    --md-ref-color-on-background-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(90))};

    /* Light */
    --md-ref-color-surface-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(98))};
    --md-ref-color-surface-dim-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(87))};
    --md-ref-color-surface-bright-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(98))};
    --md-ref-color-surface-container-lowest-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(100))};
    --md-ref-color-surface-container-low-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(96))};
    --md-ref-color-surface-container-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(94))};
    --md-ref-color-surface-container-high-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(92))};
    --md-ref-color-surface-container-highest-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(90))};
    --md-ref-color-surface-variant-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutralVariant.tone(90))};
    --md-ref-color-on-surface-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(10))};
    --md-ref-color-on-surface-variant-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(30))};
    --md-ref-color-inverse-surface-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(20))};
    --md-ref-color-inverse-on-surface-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(95))};
    --md-ref-color-background-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(98))};
    --md-ref-color-on-background-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(10))};

    /* Error Role Color Tokens */
    --error-color-source: ${this.#cssRgbFromHct(this.#brandTheme.palettes.error.keyColor)};

    /* Dark */
    --md-ref-color-error-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(80))};
    --md-ref-color-error-container-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(30))};
    --md-ref-color-on-error-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(20))};
    --md-ref-color-on-error-container-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(90))};
    --md-ref-color-inverse-error-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(40))};

    /* Light */
    --md-ref-color-error-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(40))};
    --md-ref-color-error-container-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(90))};
    --md-ref-color-on-error-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(100))};
    --md-ref-color-on-error-container-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(10))};
    --md-ref-color-inverse-error-light: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.tertiary.tone(80))};

    /* Other Color Tokens */

    /* Dark */
    --md-ref-color-outline-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutralVariant.tone(60))};
    --md-ref-color-outline-variant-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutralVariant.tone(30))};
    --md-ref-color-shadow-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(0))};
    --md-ref-color-surface-tint-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(80))};
    --md-ref-color-scrim-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(0))};

    /* Light */
    --md-ref-color-outline-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutralVariant.tone(50))};
    --md-ref-color-outline-variant-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutralVariant.tone(80))};
    --md-ref-color-shadow-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(0))};
    --md-ref-color-surface-tint-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.primary.tone(40))};
    --md-ref-color-scrim-dark: ${this.#cssRgbFromArgb(this.#brandTheme.palettes.neutral.tone(0))};
  }
}`;
  }

  #cssRgbFromHct(hctValue){
    return this.#cssRgbFromArgb(hctValue.argb);
  }

  #cssRgbFromArgb(argbValue) {
    const rgbaValue = rgbaFromArgb(argbValue);
    return `rgb(${rgbaValue.r} ${rgbaValue.g} ${rgbaValue.b})`;
  }

  writeToFile(){
    console.log("Writing CSS Token File");
    writeFileSync(this.#outputFile, this.fileContents, { flag: 'w+' });
  }
}

const brandColor = {
  hue: 275.3073139015702,
  chroma: 63.629030455186026,
  tone: 33.737227362632694
}

const generator = new ColorPaletteGenerator(brandColor);
generator.writeToFile();