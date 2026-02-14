import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

/* ================= AXIOS INSTANCE ================= */

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================= REQUEST INTERCEPTOR ================= */

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("token");

    if (token) {
      // Ensure headers object exists
      config.headers = config.headers ?? {};
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
