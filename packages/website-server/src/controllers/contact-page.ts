/* eslint valid-jsdoc: "off" */

import {Request, Response} from "@google-cloud/functions-framework";
import {generateNonce} from "../csp.js";
import {secureDefaultCSP} from "../csp-policy.js";
import {contactPageContent} from "../contact-page.js";

/**
 * Generates the contact us page
 *
 */
export function contactPageReqHandler(request:Request, response: Response) {
  const nonceValue = generateNonce();
  response.set("Content-Security-Policy", secureDefaultCSP(nonceValue));

  response.send(contactPageContent(nonceValue));
}
