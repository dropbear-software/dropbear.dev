import type { APIRoute } from "astro";
import { EnquiryEndpointController } from "../../../features/enquiry/enquiry_endpoint_controller";

export const POST: APIRoute = async ({ request }) => {
  const endpointController = new EnquiryEndpointController();
  return endpointController.onRequest(request);
};
