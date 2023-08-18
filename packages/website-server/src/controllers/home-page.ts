/* eslint-disable max-len */
/* eslint valid-jsdoc: "off" */

import {Request, Response} from "@google-cloud/functions-framework";
import {generateNonce} from "../csp.js";
import {secureDefaultCSP} from "../csp-policy.js";
import {homepageContent} from "../homepage.js";
import {importMapService} from "../services/import-map-provider.js";

/**
 * Generates the home page
 *
 */
export async function homePageReqHandler(request:Request, response: Response) {
  const nonceValue = generateNonce();
  response.set("Content-Security-Policy", secureDefaultCSP(nonceValue));

  const importMapData = importMapService.getRelativeData(request.path);

  response.send(homepageContent(nonceValue, importMapData));
}
