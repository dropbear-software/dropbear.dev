import {ReactiveController, ReactiveControllerHost} from 'lit';
import { defaultConfiguration, defaultServiceSettings } from "./lib/default-settings.js";
import { WebsiteConfiguration, WebsiteConfigurationControllerSettings } from "./lib/types.js";
import { dataLayerEvents } from '../../utils/data_layer_events.js';

export class WebsiteConfigurationController implements ReactiveController {
  host: ReactiveControllerHost;

  ready = false;

  #currentConfiguration: WebsiteConfiguration;

  #serviceSettings: WebsiteConfigurationControllerSettings;

  constructor(host: ReactiveControllerHost, serviceSettings: WebsiteConfigurationControllerSettings = defaultServiceSettings, configurationObject: WebsiteConfiguration = defaultConfiguration) {
    (this.host = host).addController(this);
    this.#currentConfiguration = configurationObject;
    this.#serviceSettings = serviceSettings;
  }

  hostConnected() {
    if (this.#currentConfiguration.remote_config_enabled === true) {
      this.#fetchRemoteConfig();
    } else {
      this.ready = true;
      this.host.requestUpdate();
      this.#publishDataLayerEvent(dataLayerEvents.configurationService.remoteConfigDisabled);
    }
  }

  public get settings(): WebsiteConfiguration {
    return this.#currentConfiguration;
  }

  async #fetchRemoteConfig(){
    try {
      const response = await fetch(this.#serviceSettings.dataSource, { signal: AbortSignal.timeout(this.#serviceSettings.fetchTimeoutMillis) });
      const parsedConfig = await response.json();
      this.#currentConfiguration = parsedConfig;
      this.#publishDataLayerEvent(dataLayerEvents.configurationService.remoteConfigInstalled);
    } catch (error) {
      this.#publishDataLayerEvent(dataLayerEvents.configurationService.remoteConfigFailed);
    }

    this.ready = true;
    this.host.requestUpdate();
  }

  #publishDataLayerEvent(eventName: string): void{
    window.dataLayer?.push({
      'event': eventName,
      'config_object': this.#currentConfiguration
    });
  }
}