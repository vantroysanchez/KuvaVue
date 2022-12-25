import axios, { type AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://localhost:7017/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;