type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};
  on = (event: string, callback: Callback): void => {
    const handlers = this.events[event] || []; //Callback[] or undefined
    handlers.push(callback);
    this.events[event] = handlers;
  };

  trigger = (event: string): void => {
    const handlers = this.events[event];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  };
}
