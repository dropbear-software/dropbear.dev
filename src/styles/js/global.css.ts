import type { CSSResultGroup } from "lit";
import { resetStyles } from "./reset.css.js";
import { themeStyles } from "./theme.css.js";

export const globalStyles: CSSResultGroup = [resetStyles, themeStyles];