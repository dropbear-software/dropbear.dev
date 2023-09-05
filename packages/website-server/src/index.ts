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
import {monitoredReqHandler} from "./controllers/monitored-request-handler.js";
import {logger} from "firebase-functions";

const app = express();
app.use((request, _response, next) => {
  if (request.headers.cookie !== undefined && request.headers.cookie!.includes("authz")) {
    if (!request.headers.cookie.includes("unset")) {
      const incidentLog = {
        incident: {
          endpoint_path: request.path,
          trace_id: request.get("X-Cloud-Trace-Context"),
          protocol: request.get("X-Forwarded-Proto"),
          technique_id: "T1589.001",
          honeypot_token: "Modified Authz cookie token: dropbear.dev",
        },
        actor: {
          ip_address: request.ip,
          country: request.get("X-Appengine-Country"),
          user_agent: request.get("user-agent"),
          ip_chain: request.get("X-Forwarded-For"),
        },
      };
      logger.warn("Human security probe confirmed", incidentLog);
    }
  }
  next();
});
app.get("/admin/", (request, response) => monitoredReqHandler(request, response));
app.get("/", (request, response) => homePageReqHandler(request, response));
app.get("/contact-us/", (request, response) => contactPageReqHandler(request, response));
app.post("/services/report-collector/", async (request, response) => await cspReportingEndpoint(request, response));


await importMapService.initialize();

export const helloWorld = onRequest(app);
