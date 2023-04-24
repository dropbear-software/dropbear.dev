import { ReactiveController, ReactiveControllerHost } from "lit";
import { PageMetadata } from "./types.js";

export class PageController implements ReactiveController {
  host: ReactiveControllerHost;

  #metadata: PageMetadata;

  constructor(host: ReactiveControllerHost, metadata: PageMetadata) {
    (this.host = host).addController(this);
    this.#metadata = metadata;
  }

  hostConnected() {
    document.title = this.#metadata.pageTitle;
  }
}