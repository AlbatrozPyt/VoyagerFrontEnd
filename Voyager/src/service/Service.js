import axios from "axios";

const apiUrl = `https://voyagerwebapi.azurewebsites.net/api`;

const api = axios.create({
  baseURL: apiUrl,
});

export default api;