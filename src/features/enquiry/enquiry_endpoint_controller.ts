import { CloudEvent, type CloudEventV1 } from 'cloudevents';
import { CustomerEnquiry } from "./customer_enquiry.js";

export class EnquiryEndpointController {
  async onRequest(req: Request): Promise<Response> {
    try {
      const formData = await req.formData();
      const customerEnquiry = CustomerEnquiry.fromFormData(formData);

      const responseBody = {
        message: "success", 
        customerEnquiry: JSON.parse(customerEnquiry.toJsonLd())
      }

      const responseHeader = {
        status: 201,
        headers: {
          "Content-Type": "application/json"
        }
      }

      await this.#logEvent(customerEnquiry);

      return new Response(JSON.stringify(responseBody), responseHeader);
    } catch (error) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }
  }

  async #logEvent(customerEnquiry: CustomerEnquiry): Promise<void> {
    // const endpoint = new URL('https://www.something.com');

    const ce: CloudEventV1<string> = {
      specversion: "1.0",
      source: "/some/source",
      type: "dev.dropbear.customer_enquiry.create.v1",
      id: this.#generateRandomId(),
      data: customerEnquiry.toJsonLd(),
      datacontenttype: "application/json",
      time: new Date(Date.now()).toISOString(),
    };

    const cloudEvent = new CloudEvent(ce);

    console.log(cloudEvent.toJSON());
  }

  #generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}