import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@lit-labs/router";
import { routerConfiguration } from "./features/router/router-configuration.js";
import { PollyfillController } from "./features/pollyfills/pollyfill-controller.js";
import { WebsiteConfigurationController } from "./features/remote-config/website-configuration-controller.js";

@customElement('dropbear-website')
export class DropbearWebsite extends LitElement {
  #router = new Router(this, routerConfiguration);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: No unused vars
  #polyfillController = new PollyfillController(this);

  #configurationController = new WebsiteConfigurationController(this);
  
  protected override render() {
    if (this.#configurationController.ready) {
      return this.#router.outlet();
    } else {
      return this.#renderLoadingState();
    }
  }

  #renderLoadingState(){
    return html`<p>Loading</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dropbear-website': DropbearWebsite;
  }
}