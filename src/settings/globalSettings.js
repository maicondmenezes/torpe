import Axios from 'axios';

export const rootUrl = 'http://localhost/';
export const _baseUrl = 'http://localhost:3000/';
export const Http = Axios.create({
  baseUrl: rootUrl
})