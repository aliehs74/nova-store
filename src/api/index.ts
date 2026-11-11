import axios from "axios";

const api = axios.create({ timeout: 10000, headers: { Accept: "application/json" } });

api.interceptors.request.use((config) => {
  const baseURL = process.env.FAKESTORE_API_BASE_URL;
  if (!baseURL || !/^https?:\/\//.test(baseURL)) throw new Error("Missing or invalid FAKESTORE_API_BASE_URL");
  config.baseURL = baseURL.replace(/\/+$/, "");

  return config;
});

export default api;
import "server-only";
