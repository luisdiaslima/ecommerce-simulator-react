import axios from 'axios';

const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br',
});

export default api;
