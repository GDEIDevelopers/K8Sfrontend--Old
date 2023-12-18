import axios from "axios";

const service = axios.create({
  baseURL: "http://8.219.238.232/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default service;
