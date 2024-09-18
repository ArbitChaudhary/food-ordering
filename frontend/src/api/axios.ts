import axios from 'axios';

const BASE_URL = 'http://localhost:7000/api/v1';

export const authorize = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
   },
});
