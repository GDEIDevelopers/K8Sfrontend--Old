import service from "@/services/axios.js";

export function login(username, password) {
  return service.post("/login", { name: username, passwd: password });
}
