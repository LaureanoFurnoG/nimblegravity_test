import axios from "axios";

const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

export default instanceAxios;
