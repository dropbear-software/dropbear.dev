import { writeFileSync } from "node:fs"
import { Hct, themeFromSourceColor, rgbaFromArgb } from "@material/material-color-utilities";
import { fileURLToPath } from "node:url";

const baseBrandColor = {
  hue: 275.3073139015702,
  chroma: 63.629030455186026,
  tone: 33.737227362632694
}

const hctBrand = Hct.from(baseBrandColor.hue, baseBrandColor.chroma, baseBrandColor.tone);

const theme = themeFromSourceColor(hctBrand.argb);

const initialCSS = `@layer design-system.reference.color {
  :root, :host {
    /* Primary Accent Color Tokens */
    --primary-color-source: ${cssRgbFromHct(theme.palettes.primary.keyColor)};

    /* Dark */
    --md-ref-color-primary-dark: ${cssRgbFromArgb(theme.palettes.primary.tone(80))};
    --md-ref-color-primary-container-dark: ${cssRgbFromArgb(theme.palettes.primary.tone(30))};
    --md-ref-color-on-primary-dark: ${cssRgbFromArgb(theme.palettes.primary.tone(20))};
    --md-ref-color-on-primary-container-dark: ${cssRgbFromArgb(theme.palettes.primary.tone(90))};
    --md-ref-color-inverse-primary-dark: ${cssRgbFromArgb(theme.palettes.primary.tone(40))};

    /* Light */
    --md-ref-color-primary-light: ${cssRgbFromArgb(theme.palettes.primary.tone(40))};
    --md-ref-color-primary-container-light: ${cssRgbFromArgb(theme.palettes.primary.tone(90))};
    --md-ref-color-on-primary-light: ${cssRgbFromArgb(theme.palettes.primary.tone(100))};
    --md-ref-color-on-primary-container-light: ${cssRgbFromArgb(theme.palettes.primary.tone(10))};
    --md-ref-color-inverse-primary-light: ${cssRgbFromArgb(theme.palettes.primary.tone(80))};

    /* Secondary Color Tokens */
    --secondary-color-source: ${cssRgbFromHct(theme.palettes.secondary.keyColor)};

    /* Dark */
    --md-ref-color-secondary-dark: ${cssRgbFromArgb(theme.palettes.secondary.tone(80))};
    --md-ref-color-secondary-container-dark: ${cssRgbFromArgb(theme.palettes.secondary.tone(30))};
    --md-ref-color-on-secondary-dark: ${cssRgbFromArgb(theme.palettes.secondary.tone(20))};
    --md-ref-color-on-secondary-container-dark: ${cssRgbFromArgb(theme.palettes.secondary.tone(90))};
    --md-ref-color-inverse-secondary-dark: ${cssRgbFromArgb(theme.palettes.secondary.tone(40))};

    /* Light */
    --md-ref-color-secondary-light: ${cssRgbFromArgb(theme.palettes.secondary.tone(40))};
    --md-ref-color-secondary-container-light: ${cssRgbFromArgb(theme.palettes.secondary.tone(90))};
    --md-ref-color-on-secondary-light: ${cssRgbFromArgb(theme.palettes.secondary.tone(100))};
    --md-ref-color-on-secondary-container-light: ${cssRgbFromArgb(theme.palettes.secondary.tone(10))};
    --md-ref-color-inverse-secondary-light: ${cssRgbFromArgb(theme.palettes.secondary.tone(80))};

    /* Tertiary Color Tokens */
    --tertiary-color-source: ${cssRgbFromHct(theme.palettes.tertiary.keyColor)};

    /* Dark */
    --md-ref-color-tertiary-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(80))};
    --md-ref-color-tertiary-container-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(30))};
    --md-ref-color-on-tertiary-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(20))};
    --md-ref-color-on-tertiary-container-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(90))};
    --md-ref-color-inverse-tertiary-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(40))};

    /* Light */
    --md-ref-color-tertiary-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(40))};
    --md-ref-color-tertiary-container-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(90))};
    --md-ref-color-on-tertiary-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(100))};
    --md-ref-color-on-tertiary-container-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(10))};
    --md-ref-color-inverse-tertiary-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(80))};

    /* Surface Color Tokens */
    --neutral-color-source:  ${cssRgbFromHct(theme.palettes.neutral.keyColor)};
    --neutral-variant-color-source: ${cssRgbFromHct(theme.palettes.neutralVariant.keyColor)};

    /* Dark */
    --md-ref-color-surface-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(6))};
    --md-ref-color-surface-dim-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(6))};
    --md-ref-color-surface-bright-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(24))};
    --md-ref-color-surface-container-lowest-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(4))};
    --md-ref-color-surface-container-low-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(10))};
    --md-ref-color-surface-container-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(12))};
    --md-ref-color-surface-container-high-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(17))};
    --md-ref-color-surface-container-highest-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(22))};
    --md-ref-color-surface-variant-dark: ${cssRgbFromArgb(theme.palettes.neutralVariant.tone(30))};
    --md-ref-color-on-surface-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(90))};
    --md-ref-color-on-surface-variant-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(80))};
    --md-ref-color-inverse-surface-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(90))};
    --md-ref-color-inverse-on-surface-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(20))};
    --md-ref-color-background-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(6))};
    --md-ref-color-on-background-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(90))};

    /* Light */
    --md-ref-color-surface-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(98))};
    --md-ref-color-surface-dim-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(87))};
    --md-ref-color-surface-bright-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(98))};
    --md-ref-color-surface-container-lowest-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(100))};
    --md-ref-color-surface-container-low-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(96))};
    --md-ref-color-surface-container-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(94))};
    --md-ref-color-surface-container-high-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(92))};
    --md-ref-color-surface-container-highest-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(90))};
    --md-ref-color-surface-variant-light: ${cssRgbFromArgb(theme.palettes.neutralVariant.tone(90))};
    --md-ref-color-on-surface-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(10))};
    --md-ref-color-on-surface-variant-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(30))};
    --md-ref-color-inverse-surface-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(20))};
    --md-ref-color-inverse-on-surface-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(95))};
    --md-ref-color-background-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(98))};
    --md-ref-color-on-background-light: ${cssRgbFromArgb(theme.palettes.neutral.tone(10))};

    /* Error Role Color Tokens */
    --error-color-source: ${cssRgbFromHct(theme.palettes.error.keyColor)};

    /* Dark */
    --md-ref-color-error-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(80))};
    --md-ref-color-error-container-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(30))};
    --md-ref-color-on-error-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(20))};
    --md-ref-color-on-error-container-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(90))};
    --md-ref-color-inverse-error-dark: ${cssRgbFromArgb(theme.palettes.tertiary.tone(40))};

    /* Light */
    --md-ref-color-error-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(40))};
    --md-ref-color-error-container-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(90))};
    --md-ref-color-on-error-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(100))};
    --md-ref-color-on-error-container-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(10))};
    --md-ref-color-inverse-error-light: ${cssRgbFromArgb(theme.palettes.tertiary.tone(80))};

    /* Other Color Tokens */

    /* Dark */
    --md-ref-color-outline-dark: ${cssRgbFromArgb(theme.palettes.neutralVariant.tone(60))};
    --md-ref-color-outline-variant-dark: ${cssRgbFromArgb(theme.palettes.neutralVariant.tone(30))};
    --md-ref-color-shadow-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(0))};
    --md-ref-color-surface-tint-dark: ${cssRgbFromArgb(theme.palettes.primary.tone(80))};
    --md-ref-color-scrim-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(0))};

    /* Light */
    --md-ref-color-outline-dark: ${cssRgbFromArgb(theme.palettes.neutralVariant.tone(50))};
    --md-ref-color-outline-variant-dark: ${cssRgbFromArgb(theme.palettes.neutralVariant.tone(80))};
    --md-ref-color-shadow-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(0))};
    --md-ref-color-surface-tint-dark: ${cssRgbFromArgb(theme.palettes.primary.tone(40))};
    --md-ref-color-scrim-dark: ${cssRgbFromArgb(theme.palettes.neutral.tone(0))};
  }
}
`;

function cssRgbFromHct(hctValue){
  const rgbaValue = rgbaFromArgb(hctValue.argb);
  return `rgb(${rgbaValue.r} ${rgbaValue.g} ${rgbaValue.b})`;
}

function cssRgbFromArgb(argbValue) {
  const rgbaValue = rgbaFromArgb(argbValue);
  return `rgb(${rgbaValue.r} ${rgbaValue.g} ${rgbaValue.b})`;
}

const outputFile = fileURLToPath(new URL("./src/color/reference/color-tokens.css", import.meta.url));
writeFileSync(outputFile, initialCSS, { flag: 'w+' });
