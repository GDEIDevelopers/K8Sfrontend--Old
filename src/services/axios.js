import axios from "axios";

const service = axios.create({
  baseURL: "http://8.219.238.232/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    if (
      error.response.status === 401 &&
      error.response.data.message === "Token expired"
    ) {
      // 返回的状态码是 401 并且错误信息表明 token 过期，则尝试刷新 token
      return axios
        .post("/refresh")
        .then((response) => {
          const newToken = response.data.accessToken;
          // 将新的 accessToken 存储到 localStorage 中
          localStorage.setItem("token", newToken);
          // 重新发送原始请求
          error.config.headers["Authorization"] = `Bearer ${newToken}`;
          return axios(error.config);
        })
        .catch((refreshError) => {
          // 刷新 token 失败，重定向到登录页面或者执行其他操作
          console.error("Failed to refresh access token", refreshError);
          // 重定向到登录页面或者执行其他操作
        });
    }
    // 其他错误情况，直接返回错误
    return Promise.reject(error);
  }
);

export default service;
