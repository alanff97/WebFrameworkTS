interface UserProps {
  name?: string;
  age?: number;
}
type Callback = () => void;
export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(event: string, callback: Callback): void {
    const handlers = this.events[event] || []; //Callback[] or undefined
    handlers.push(callback);
    this.events[event] = handlers;
  }
}
