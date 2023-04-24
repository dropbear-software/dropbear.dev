import { LitElement } from "lit";
import { PageController } from "./lib/page-controller.js";
import { PageMetadata } from "./lib/types.js";

export class WebPage extends LitElement {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: No unused vars
  #pageController: PageController
  
  constructor(pageMetadata: PageMetadata) {
    super();
    this.#pageController = new PageController(this, pageMetadata);
  }
}