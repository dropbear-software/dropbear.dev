import { LitElement } from "lit";
import { designSystem } from "@dropbear/design-system";

export class BaseElement extends LitElement {
  static styles = [designSystem];
}