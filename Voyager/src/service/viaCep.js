import axios from "axios";

const apiViaCepUrl = `https://viacep.com.br/ws`;

export const apiViaCep = axios.create({
  baseURL : apiViaCepUrl,
})