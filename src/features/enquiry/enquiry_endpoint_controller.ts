import { CustomerEnquiry } from "./customer_enquiry.js";

export class EnquiryEndpointController {
  async onRequest(req: Request): Promise<Response> {
    const isProduction = process.env.NODE_ENV === 'production';

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
      
      if(isProduction){
        await this.#webhook(customerEnquiry);
      }

      console.log('Customer enquiry received');

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

  // Send a base64 encoded copy of the JSON-LD object to Google Workspace Chat
  async #webhook(customerEnquiry: CustomerEnquiry) {
    const workspaceId = 'AAAAs194MP4';
    const url = new URL(`https://chat.googleapis.com/v1/spaces/${workspaceId}/messages`);
    url.searchParams.append('key', 'AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI');
    url.searchParams.append('token', 'MNEtnlU_57yd2fozXTPVqMLQp0lFHD8gib3niVpNZhY');
    
    const base64EncodedMessage = btoa(customerEnquiry.toJsonLd());
    
    const res = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify({text: base64EncodedMessage})
    });
    return await res.json();
  }
}