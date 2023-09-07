
export class Attributes <T extends object>{
  constructor(private data: T) {}
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: T): void {
    // using the sign ? in  the interface because of this, we can update one or more properties
    Object.assign(this.data, update);
  }
}
