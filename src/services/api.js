import axios from 'axios';

const IP_ADDRESS = 'http://10.0.2.2:3333';
// const IP_EMULADOR_IOS = 'localhost:3333';

const api = axios.create({
  baseURL: IP_ADDRESS,
});

export default api;
