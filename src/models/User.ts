import axios from 'axios';
import { AxiosResponse } from 'axios';
interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
 
  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // using the sign ? in  the interface because of this, we can update one or more properties
    Object.assign(this.data, update);
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
