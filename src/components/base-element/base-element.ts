import { LitElement } from "lit";
import { globalStyles } from "./lib/global_styles.js";

export class BaseElement extends LitElement {
  static styles = [...globalStyles];
}