/* eslint max-len: "off" */
/* eslint valid-jsdoc: "off" */

import {Request, Response} from "@google-cloud/functions-framework";
import {logger} from "firebase-functions/v2";

/**
 * Designated endpoint for all Reporting API reports.
 *
 */
export async function cspReportingEndpoint(request:Request, response: Response) {
  const correctContentType = request.get("Content-Type") === "application/csp-report";

  if (correctContentType) {
    // handle Reporting API reports, which are sent in an array of reports
    const data = request.body;
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
}
