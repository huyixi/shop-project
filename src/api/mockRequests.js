// 请求mock接口的ajax封装
import axios from "axios";

const mockRequests = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

mockRequests.interceptors.request.use((config) => {
  return config;
});

mockRequests.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default mockRequests;
