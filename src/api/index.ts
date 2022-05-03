import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://parking-lot-to-pfz.herokuapp.com',
  timeout: 5000,
  headers: {},
});
