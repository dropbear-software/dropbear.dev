// import {consume} from '@lit-labs/context';
// import { type WebsiteConfiguration, websiteConfigurationContext } from "../../features/remote-config/website-configuration-context.js";
import { PageController } from "./lib/page-controller.js";
import { PageMetadata } from "./lib/types.js";
// import { property } from "lit/decorators.js";
import { BaseElement } from "../base-element/base-element.js";

export class WebPage extends BaseElement {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: No unused vars
  #pageController: PageController

  // @consume({context: websiteConfigurationContext})
  // @property({attribute: false})
  // public websiteConfiguration?: WebsiteConfiguration;
  
  constructor(pageMetadata: PageMetadata) {
    super();
    this.#pageController = new PageController(this, pageMetadata);
  }
}