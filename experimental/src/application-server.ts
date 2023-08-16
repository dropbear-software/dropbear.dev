import Fastify from 'fastify'
import {fastifyStatic} from '@fastify/static';
import { fileURLToPath } from "node:url";
import { HomepageRequestController } from './homepage-request-controller.js';


export class ApplicationServer {
  #port: number;

  #fastifyServer;

  constructor(portNumber: string, loggingEnabled: boolean) {
    this.#port = parseInt(portNumber);
    this.#fastifyServer = Fastify({logger: loggingEnabled});
    this.installRoutes();
  }

  installRoutes(){
    this.#fastifyServer.get('/', async (request, reply) => new HomepageRequestController().handleRequest(request, reply));

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