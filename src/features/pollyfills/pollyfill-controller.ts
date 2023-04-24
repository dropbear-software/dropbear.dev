import {ReactiveController, ReactiveControllerHost} from 'lit';
import { dataLayerEvents } from '../../utils/data_layer_events';

export class PollyfillController implements ReactiveController {
  host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected() {
    this.#enableUrlPattern();
  }

  async #enableUrlPattern(): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Property 'UrlPattern' does not exist
    if (!globalThis.URLPattern) { 
      await import("urlpattern-polyfill");
      window.dataLayer?.push({
        'event': dataLayerEvents.pollyfillInstalled,
        'name': 'URLPattern'
      });
    }
  }
}