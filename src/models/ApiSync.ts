import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {} // new Sync(http://localhost:3000/users)
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
