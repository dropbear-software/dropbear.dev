import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@lit-labs/router";
import { routerConfiguration } from "./features/router/router-configuration.js";
import { Task } from "@lit-labs/task";
import { WebsiteConfiguration } from "./features/remote-config/website-configuration.js";
import { defaultConfiguration } from "./features/remote-config/service-settings.js";

@customElement('dropbear-website')
export class DropbearWebsite extends LitElement {
  #router = new Router(this, routerConfiguration);

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
          error: () => this.#handleError()
        }
      )}
    `;
  }

  async #fetchRemoteConfiguration(){
    const response = await fetch('./assets/data/fake_remote_config_settings.json');
    const parsedConfig = await response.json();
    this.#config = parsedConfig;
    console.log(this.#config);
  }

  #renderInitialScreen(){
    return html`<p>Initial</p>`;
  }

  #renderLoadingState(){
    return html`<p>Loading</p>`;
  }

  #handleError(){
    console.error('Unable to fetch remote configuration settings');
    return this.#router.outlet();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dropbear-website': DropbearWebsite;
  }
}