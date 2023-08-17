/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {homepageContent} from "./homepage.js";
import {generateNonce} from "./csp.js";
import "@google-cloud/functions-framework";
import express from "express";

const app = express();

app.get('/', (request, response) => {
  const nonceValue = generateNonce();
  logger.info("Serving Home Page", {structuredData: true});
  response.set("Content-Security-Policy", `object-src 'none'; script-src 'nonce-${nonceValue}' 'unsafe-inline' 'strict-dynamic' https: http:; base-uri 'none'; font-src fonts.gstatic.com; style-src 'nonce-${nonceValue}' 'self' fonts.googleapis.com; report-uri https://www.dropbear.dev/services/report-collector/`);

  response.send(homepageContent(nonceValue));
});
 

export const helloWorld = onRequest(app);
