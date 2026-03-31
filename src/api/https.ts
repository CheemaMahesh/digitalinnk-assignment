import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || "Something went wrong";
    return Promise.reject(new Error(message));
  },
);

const https = {
  get: <T>(url: string) => instance.get<T, T>(url),
  post: <T>(url: string, data?: unknown) => instance.post<T, T>(url, data),
  put: <T>(url: string, data?: unknown) => instance.put<T, T>(url, data),
  delete: <T>(url: string) => instance.delete<T, T>(url),
  patch: <T>(url: string, data?: unknown) => instance.patch<T, T>(url, data),
};

export default https;
