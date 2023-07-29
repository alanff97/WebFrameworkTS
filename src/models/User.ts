import axios from 'axios';
import { AxiosResponse } from 'axios';
interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}
type Callback = () => void;
export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // using the sign ? in  the interface because of this, we can update one or more properties
    Object.assign(this.data, update);
  }
  on(event: string, callback: Callback): void {
    const handlers = this.events[event] || []; //Callback[] or undefined
    handlers.push(callback);
    this.events[event] = handlers;
  }

  trigger(event: string): void {
    const handlers = this.events[event];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    try {
      const id = this.get('id');
      axios
        .get(`http://localhost:3000/users/${id}`)
        .then((response: AxiosResponse): void => {
          this.set(response.data);
        });
    } catch (error) {
      return error;
    }
  }
  save(): void {
    try {
      const id = this.get('id');
      if (id) {
        axios.put(`http://localhost:3000/users/${id}`, this.data);
      } else {
        axios.post('http://localhost:3000/users', this.data);
      }
    } catch (error) {
      return error;
    }
  }
}
