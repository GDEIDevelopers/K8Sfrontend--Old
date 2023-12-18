// services/http.ts
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const http = axios.create({
  baseURL: "http://8.219.238.232",
});

export default http;
