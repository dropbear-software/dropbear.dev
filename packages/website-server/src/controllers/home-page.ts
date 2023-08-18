/* eslint valid-jsdoc: "off" */

import {Request, Response} from "@google-cloud/functions-framework";
import {generateNonce} from "../csp.js";
import {secureDefaultCSP} from "../csp-policy.js";
import {homepageContent} from "../homepage.js";

/**
 * Generates the home page
 *
 */
export function homePageReqHandler(request:Request, response: Response) {
  const nonceValue = generateNonce();
  response.set("Content-Security-Policy", secureDefaultCSP(nonceValue));

  response.send(homepageContent(nonceValue));
}
