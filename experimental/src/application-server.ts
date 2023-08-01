import { RenderResultReadable } from '@lit-labs/ssr/lib/render-result-readable.js';
import Fastify from 'fastify'
import { renderIndex } from './render-page.js';
import {fastifyStatic} from '@fastify/static';
import { fileURLToPath } from "node:url";


export class ApplicationServer {
  #port: number;

  #fastifyServer;

  #ssrEnabled = true;

  constructor(portNumber: string, loggingEnabled: boolean) {
    this.#port = parseInt(portNumber);
    this.#fastifyServer = Fastify({logger: loggingEnabled});
    this.installRoutes();
  }

  installRoutes(){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.#fastifyServer.get('/', async (_request, reply) => {
      if (this.#ssrEnabled) {
        const result = new RenderResultReadable(renderIndex({ name: 'Friend' }));
        reply
        .header('Content-Type', 'text/html; charset=utf-8;')
        .send(result)
      } else {
        reply
        .header('Content-Type', 'text/html; charset=utf-8;')
        .send("<html><body><h1>Not Enabled</h1></body></html>")
      }
    });

    const websitePackageUrl = new URL('../pkgs/website/', import.meta.url);
    const designPackageUrl = new URL('../pkgs/design-system/', import.meta.url);
    console.log(fileURLToPath(websitePackageUrl));
    this.#fastifyServer.register(fastifyStatic, {
      root: fileURLToPath(websitePackageUrl),
      prefix: '/packages/website/'
    });

    this.#fastifyServer.register(fastifyStatic, {
      root: fileURLToPath(designPackageUrl),
      prefix: '/packages/design-system/',
      decorateReply: false
    });
  }

  start(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.#fastifyServer.listen({port: this.#port}, (error, _address) => {
      if (error) {
        throw error;
      }
    });
  }
}