import { LitElement } from "lit";
import {consume} from '@lit-labs/context';
import { type WebsiteConfiguration, websiteConfigurationContext } from "../../features/remote-config/website-configuration-context.js";
import { PageController } from "./lib/page-controller.js";
import { PageMetadata } from "./lib/types.js";
import { property } from "lit/decorators.js";
import { globalStyles } from "../../utils/global_styles.js";

export class WebPage extends LitElement {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: No unused vars
  #pageController: PageController

  @consume({context: websiteConfigurationContext})
  @property({attribute: false})
  public websiteConfiguration?: WebsiteConfiguration;

  static styles = [...globalStyles];
  
  constructor(pageMetadata: PageMetadata) {
    super();
    this.#pageController = new PageController(this, pageMetadata);
  }
}