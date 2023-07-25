export class ResourceIdentifier {
  static pattern = new RegExp('^(?!-)[a-z-]+[^-](?:/){1}?(?!-)[a-z-/]+(?<!-)(?<!/)$');

  accessor id: string;
  
  constructor(id: string) {
    if (id.match(ResourceIdentifier.pattern) === null) {
      throw new Error("Invalid Resource Identifier pattern. Only use lower case letters, hyphens and forward slashes");
    }

    this.id = id;
  }
}