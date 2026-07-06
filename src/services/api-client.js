import axios from "axios";
import { baseURL } from "../config";
// import { data } from "react-router";
// import baseURL from "./../config/index";

export const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 60000,
});
apiClient.interceptors.request.use((config) => {
  console.log(config);
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return Promise.resolve({
      success: true,
      data: response,
      // data: response.data,
    });
  },
  (error) => {
    return Promise.reject({
      success: false,
      error: error,
      message: error.response?.data?.message,
    });
  },
);
