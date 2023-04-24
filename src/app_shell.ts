import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@lit-labs/router";
import { Task } from "@lit-labs/task";
import { routerConfiguration } from "./features/router/router-configuration.js";
import { WebsiteConfiguration } from "./features/remote-config/website-configuration.js";
import { defaultConfiguration } from "./features/remote-config/service-settings.js";
import { PollyfillController } from "./features/pollyfills/pollyfill-controller.js";
import { dataLayerEvents } from "./utils/data_layer_events.js";

@customElement('dropbear-website')
export class DropbearWebsite extends LitElement {
  #router = new Router(this, routerConfiguration);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: No unused vars
  #polyfillController = new PollyfillController(this);

  #getConfigTask = new Task(
    this,
    () => this.#fetchRemoteConfiguration(),
    () => []
  );

  #config: WebsiteConfiguration = defaultConfiguration;
  
  protected override render() {
    return html`
      ${this.#getConfigTask.render(
        {
          initial: () => this.#renderInitialScreen(),
          pending: () => this.#renderLoadingState(),
          complete: () => this.#router.outlet(),
          error: (error) => this.#handleError(error)
        }
      )}
    `;
  }

  async #fetchRemoteConfiguration(){
    const response = await fetch('./assets/data/fake_remote_config_settings.json');
    const parsedConfig = await response.json();
    this.#config = parsedConfig;
    window.dataLayer?.push({
      'event': dataLayerEvents.remoteConfig.installationSuccess,
      'settings': this.#config
    });
  }

  #renderInitialScreen(){
    return html`<p>Initial</p>`;
  }

  #renderLoadingState(){
    return html`<p>Loading</p>`;
  }

  #handleError(error: unknown){
    let errorType = 'unknown';
    if (typeof error === 'object' && error !== null && 'toString' in error){
      errorType = error.toString();
    }

    window.dataLayer?.push({
      'event': dataLayerEvents.remoteConfig.installationFailed,
      'settings': this.#config,
      'error_type': errorType
    });
    return this.#router.outlet();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dropbear-website': DropbearWebsite;
  }
}