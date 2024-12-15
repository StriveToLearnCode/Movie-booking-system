import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.warn("No token found in localStorage!");
    }
    return config;
  },
  function (error) {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { response } = error;
    if (response) {
      if (response.status === 401) {
        // Token 过期或无效
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else if (response.status === 404) {
        console.error("请求的资源未找到！");
      } else if (response.status === 500) {
        console.error("服务器内部错误！");
      }
    } else {
      console.error("请求失败:", error);
    }
    return Promise.reject(error);
  }
);

export default request;
