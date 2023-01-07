import axios from "axios";

export const customAxios = axios.create({
  baseURL: "http://localhost:8080",
});

customAxios.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function(error) {
    console.log(error);
    return Promise.reject(error);
  }
);
