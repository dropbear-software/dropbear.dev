/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const serviceConfig = {
  devMode: {
    host: new URL("http://127.0.0.1:5000"),
    fileName: "importmap-dev.json",
  },
  prodMode: {
    host: new URL("http://0.0.0.0:8080"),
    fileName: "importmap-prod.json",
  },
};


class ImportMapProvider {
  #assetURL: URL;

  #data?: object;

  constructor(assetHost: URL, fileName: string) {
    this.#assetURL = new URL(`${assetHost}/packages/web-frontend/importmaps/${fileName}`);
  }

  async initialize() {
    const resourceRequest = await fetch(this.#assetURL);
    if (resourceRequest.ok) {
      this.#data = await resourceRequest.json() as object;
    } else {
      throw new Error("Unable to fetch the importmap.json file");
    }
  }

  get data() {
    return this.#data;
  }

  get dataString() {
    return JSON.stringify(this.#data);
  }

  // Eventually we will just be able to just import the importmap from a URL and
  // all of these problems with relative file paths will just go away.
  // Until then however, we have to manually rewrite the file path for any
  // paths referencing the packages directory in the public folder.
  // We dynamically adjust the path here to an appropriate value relative
  // to the URL of the page the user is loading.
  getRelativeData(pagePath: string) {
    const urlDepth = pagePath.split("/");
    if (urlDepth.length === 2) {
      return this.dataString;
    } else {
      let relativePath = "";
      for (let index = 2; index < urlDepth.length; index++) {
        relativePath = relativePath + "../";
      }
      const originalPathString = "\"./packages/";
      const newPathString = `"${relativePath}packages/`;
      return this.dataString.replaceAll(originalPathString, newPathString);
    }
  }
}

export const importMapService = new ImportMapProvider(serviceConfig.devMode.host, serviceConfig.devMode.fileName);
