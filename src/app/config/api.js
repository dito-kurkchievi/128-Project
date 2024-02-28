import axios from "axios";

export const TOKEN_LOCAL_STORAGE_KEY = 'token';

const token = () => localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);

export const $api = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    Authorization: `Bearer ${token()}`
  }
})

$api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${token()}`
  }
  return config;
})