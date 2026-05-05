import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true
})

export const getCurrentUserApi = () => api.post("/auth/get-current-user");
export const register = ( formData ) => api.post("/auth/register", formData);
export const login = ( formData ) => api.post("/auth/login", formData);