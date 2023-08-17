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

const domain = "https://dropbear.dev";

app.get("/", (request, response) => {
  const nonceValue = generateNonce();
  logger.info("Serving Home Page", {structuredData: true});
  response.set("Content-Security-Policy", `object-src 'none'; script-src 'nonce-${nonceValue}' 'unsafe-inline' 'strict-dynamic' https: http:; base-uri 'none'; font-src fonts.gstatic.com; style-src 'nonce-${nonceValue}' 'self' fonts.googleapis.com; report-uri ${domain}/services/report-collector/`);

  response.send(homepageContent(nonceValue));
});

app.post("/services/report-collector/", async (request, response) => {
  const correctContentType = request.get("Content-Type") === "application/csp-report";
  console.log(request.get("Content-Type"));

  if (correctContentType) {
    // handle Reporting API reports, which are sent in an array of reports
    let data = request.body;
    const newReports: Array<{ age: number; }> = await JSON.parse(data);
    logger.warn("Processing CSP Report", newReports);
    response.status(200).send("OK");
  } else {
    response
      .status(400)
      .send(
        new Error("Content-Type not supported. The Content-Type must be application/csp-report.")
    );
  }
});



export const helloWorld = onRequest(app);
