import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

requests.interceptors.request.use((config) => {
  nProgress.start();
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  return config;
});

requests.interceptors.response.use(
  (res) => {
    nProgress.done();
    return res.data;
  },
  (error) => {
    nProgress.done();
    return Promise.reject(new Error("fault"));
    alert("fault");
  }
);
export default requests;
