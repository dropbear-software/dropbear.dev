import { LitElement } from "lit";
import { designSystem } from "@dropbear/web-design-system";

export class BaseElement extends LitElement {
  static styles = [designSystem];
}