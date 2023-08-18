/* eslint-disable require-jsdoc */
export class ResourceNotFoundError extends Error {
  accessor id: string;

  constructor(message: string, resourceId: string) {
    super(message);
    this.id = resourceId;
    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, ResourceNotFoundError.prototype);
  }
}
