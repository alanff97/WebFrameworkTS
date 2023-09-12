export class Attributes<T extends object> {
  constructor(private data: T) {}
  get = <K extends keyof T>(key: K): T[K] => {
    // the only values of K its the keys of T, in this case UserProps(name,age,id)
    return this.data[key];
  };

  set(update: T): void {
    // using the sign ? in  the interface because of this, we can update one or more properties
    Object.assign(this.data, update);
  }
}
