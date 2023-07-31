export class WebsiteServer {
  #port: number;

  constructor(portNumber: string){
    this.#port = parseInt(portNumber);
  }

  toString(){
    return `WebsiteServer running on port ${this.#port.toString()}`;
  }
}