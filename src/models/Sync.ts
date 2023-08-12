import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';
export class Sync {
  constructor(public rootUrl: string) {} // new Sync(http://localhost:3000/users)
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    try {
      const { id } = data;
      if (id) {
        return axios.put(`${this.rootUrl}/${id}`, data);
      } else {
        return axios.post(this.rootUrl, data);
      }
    } catch (error) {
      return error;
    }
  }
}
