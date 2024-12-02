export class CustomerEnquiry {
  constructor(
    public readonly firstName: string,
    public readonly familyName: string,
    public readonly email: string,
    public readonly organisation: string | null,
    public readonly message: string,
    public readonly startDate: Date,
    public readonly endDate: Date = new Date(Date.now())
  ) {
    if (!CustomerEnquiry.isValidEmail(email)) {
      throw new Error("Invalid email address provided.");
    }
  }

  static fromFormData(data: FormData): CustomerEnquiry {
    const name = data.get("givenName");
    const surname = data.get("familyName");
    const startDate = data.get("startTime");
    const email = data.get("email");
    const organisation = data.get("organization");
    const message = data.get("message");

    if (
      name === null ||
      surname === null ||
      startDate === null ||
      email === null ||
      message === null
    ) {
      throw new Error("Missing required fields");
    }

    return new CustomerEnquiry(
      name.toString(),
      surname.toString(),
      email.toString(),
      organisation?.toString() || null,
      message.toString(),
      new Date(startDate.toString())
    );
  }

  static fromJsonLd(jsonLdData: string): CustomerEnquiry {
    const object = JSON.parse(jsonLdData);

    if (
      !object.author ||
      !object.author.givenName ||
      !object.author.familyName ||
      !object.author.email ||
      !object.question.text ||
      !object.startTime ||
      !object.endTime
    ) {
      throw new Error("Missing required fields");
    }

    return new CustomerEnquiry(
      object.author.givenName,
      object.author.familyName,
      object.author.email,
      object.author.worksFor.name,
      object.question.text,
      new Date(object.startTime),
      new Date(object.endTime)
    );
  }

  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Serialize the customer enquiry into a JSON-LD object.
   * @returns {string} The JSON-LD representation of the customer enquiry.
   */
  public toJsonLd(): string {
    const object = {
      "@context": "https://schema.org",
      "@type": "AskAction",
      agent: {
        "@type": "Person",
        name: `${this.firstName} ${this.familyName}`,
        givenName: this.firstName,
        familyName: this.familyName,
        email: this.email,
        worksFor: {
          "@type": "Organization",
          name: this.organisation,
        },
      },
      recipient: {
        "@type": "OnlineBusiness",
        url: "https://www.dropbear.dev",
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "enquiries@dropbear.dev",
            contactType: "customer service",
          },
        ],
      },
      question: {
        "@type": "Question",
        text: this.message,
      },
      startTime: this.startDate.toISOString(),
      endTime: this.endDate.toISOString(),
    };
    return JSON.stringify(object);
  }
}
