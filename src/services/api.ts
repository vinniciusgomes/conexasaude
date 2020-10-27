import axios from 'axios';

const api = axios.create({
  baseURL: 'http://desafio.conexasaude.com.br/api',
});

export default api;
