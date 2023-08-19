/* eslint max-len: "off" */
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import express from "express";
import {contactPageReqHandler} from "./controllers/contact-page.js";
import {cspReportingEndpoint} from "./controllers/csp-endpoint.js";
import {homePageReqHandler} from "./controllers/home-page.js";
import {importMapService} from "./services/import-map-provider.js";

const app = express();
app.get("/", (request, response) => homePageReqHandler(request, response));
app.get("/contact-us/", (request, response) => contactPageReqHandler(request, response));
app.post("/services/report-collector/", async (request, response) => await cspReportingEndpoint(request, response));
app.get("/admin", (request, response) => homePageReqHandler(request, response));

await importMapService.initialize();

export const helloWorld = onRequest(app);
