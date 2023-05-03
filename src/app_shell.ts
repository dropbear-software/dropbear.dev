import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@lit-labs/router";
import { provide } from '@lit-labs/context';
import { websiteConfigurationContext } from "./features/remote-config/website-configuration-context.js";
import { routerConfiguration } from "./features/router/router-configuration.js";
import { PollyfillController } from "./features/pollyfills/pollyfill-controller.js";
import { WebsiteConfigurationController } from "./features/remote-config/website-configuration-controller.js";
import { globalStyles } from "./utils/global_styles.js";

@customElement('dropbear-website')
export class DropbearWebsite extends LitElement {
  #router = new Router(this, routerConfiguration);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: No unused vars
  #polyfillController = new PollyfillController(this);

  #configurationController = new WebsiteConfigurationController(this);

  @provide({context: websiteConfigurationContext})
  context = this.#configurationController.settings;

  static styles = [...globalStyles, css`
    :host {
      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);
      display: block;
      overflow: auto;
    }
  `];
  
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