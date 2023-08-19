/* eslint-disable require-jsdoc */
import {Request, Response} from "@google-cloud/functions-framework";
import {logger} from "firebase-functions";

// This endpoint essentially acts as a dangle so that we can start establishing
// a collection system to gather basic information about the actor along
// with some other basic information that could help jumpstart an investigation.
// In addition to just doing collection, we also take it as an opportunity to
// set yet another trap for the attacker that would allow us to determine a
// that they had moved beyond automated scanning and that we are in fact
// dealing with a human at the end of this connection. We crafted a decoy
// here that provides them with a useless sidequest to buy us time but
// appears entirely natural and not suspicious unlike many "canary tokens"
// (i.e. it doesn't look like a token).
export function monitoredReqHandler(request:Request, response: Response) {
  const incidentLog = {
    incident: {
      endpoint_path: request.path,
      trace_id: request.get("X-Cloud-Trace-Context"),
      protocol: request.get("X-Forwarded-Proto"),
      technique_id: "T1594",
      honeypot_token: "Monitored Endpoint: dropbear.dev",
    },
    actor: {
      ip_address: request.ip,
      country: request.get("X-Appengine-Country"),
      user_agent: request.get("user-agent"),
      ip_chain: request.get("X-Forwarded-For"),
    },
  };

  // Use structured logging to ensure our incidents are searchable
  logger.warn("Monitored endpoint accessed", incidentLog);

  // We could also create a bit of Express middleware that
  // is explicitly looking for anyone with an "authz" cookie
  // that is set to anything other than unset as a way of
  // identifying when an actor has moved away from just
  // using automated scanning techniques. Perhaps something
  // closer to ID: T1589.001 would be appropriate.
  response.cookie("authz", "unset").redirect(302, "/");
}
