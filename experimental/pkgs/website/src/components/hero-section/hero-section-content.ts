import { TemplateResult } from "lit"

export interface HeroSectionContent {
  headline: string | TemplateResult,
  leadText: string | TemplateResult,
  primaryButton: {
    text: string,
    destination: string,
  },
  secondaryButton : {
    text: string,
    destination: string
  },
  heroImageSvg: TemplateResult
}