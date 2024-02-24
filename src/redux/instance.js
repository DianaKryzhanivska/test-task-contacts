import axios from 'axios';

const BASE_URL = 'https://contacts-api-0b0w.onrender.com';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
