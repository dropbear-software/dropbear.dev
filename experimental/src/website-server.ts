// One thing that might be nice would be having a pubsub channel dedicated to "cache:reset" events.
export class WebsiteServer {
  #port: number;

  constructor(portNumber: string){
    this.#port = parseInt(portNumber);
  }

  toString(){
    return `WebsiteServer running on port ${this.#port.toString()}`;
  }
}