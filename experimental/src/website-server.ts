import Router from '@koa/router';
import Koa from 'koa';
import staticFiles from 'koa-static';
import { RenderResultReadable } from '@lit-labs/ssr/lib/render-result-readable.js';
import { renderIndex } from './render-page.js';

// One thing that might be nice would be having a pubsub channel dedicated to "cache:reset" events.
export class WebsiteServer {
  #port: number;

  #koaApp = new Koa();

  #router = new Router();

  #ssrEnabled = true;

  constructor(portNumber: string){
    this.#port = parseInt(portNumber);
    this.#router.get('/', (ctx) => this.processHomePage(ctx));
    this.#koaApp.use(this.#router.routes());
    this.#koaApp.use(staticFiles('pkgs/website/lib', {}))
  }

  start(): void {
    this.#koaApp.listen(this.#port);
  }

  processHomePage(ctx: Koa.Context){
    ctx.type = 'text/html';
    if (this.#ssrEnabled) {
      ctx.body = new RenderResultReadable(renderIndex({ name: 'Friend' }));  
    } else {
      ctx.body = "<html><body><h1>Hello World</h1></body></html>"
    }
    
    
  }

  toString(){
    return `WebsiteServer running on port ${this.#port.toString()} SSR Mode: ${this.#ssrEnabled}`;
  }
}