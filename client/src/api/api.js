import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export const register = ( formData ) => api.post("/auth/register", formData);