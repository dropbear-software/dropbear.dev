export class CustomerEnquiry {
  constructor(
    public readonly firstName: string,
    public readonly familyName: string,
    public readonly email: string,
    public readonly message: string,
    public readonly startDate: Date,
    public readonly endDate: Date = new Date(Date.now()),
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

    if(name === null || surname === null || startDate === null || email === null){
      throw new Error("Missing required fields");
    }

    return new CustomerEnquiry(
      name.toString(), 
      surname.toString(), 
      email.toString(), 
      '',
      new Date(startDate.toString())
    );
  }

  // static fromJsonLd(jsonLdData: string): CustomerEnquiry {
  //   const object = JSON.parse(jsonLdData);
  //   return new CustomerEnquiry(
  //     object.author.givenName, 
  //     object.author.familyName, 
  //     object.author.email, 
  //     '',
    
  //   )
  // }

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
      "@type": "Question",
      text: '',
      answerCount: 0,
      author: {
        "@type": "Person",
        name: `${this.firstName}`,
        givenName: this.firstName,
        familyName: this.familyName,
        email: this.email
      }
    }
    return JSON.stringify(object);
  }
}
