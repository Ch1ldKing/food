import axios from "axios";

const foodHttp = axios.create({
  baseURL: "http://172.23.196.213:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

foodHttp.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

foodHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { foodHttp };
