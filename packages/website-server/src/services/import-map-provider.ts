/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import developmentImportMap from "../generated/importmaps/importmap-dev.json" assert { type: "json" };
// import productionImportMap from "../generated/importmaps/importmap-prod.json" assert { type: "json"};


const serviceConfig = {
  importMap: developmentImportMap,
};


class ImportMapProvider {
  #data?: object;

  constructor(rawData: object) {
    this.#data = rawData;
  }

  async initialize() {
    return true;
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

export const importMapService = new ImportMapProvider(serviceConfig.importMap);
