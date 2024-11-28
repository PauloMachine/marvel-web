import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";
import md5 from "md5";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const timestamp = Date.now().toString();
    const hash = md5(
      timestamp +
        process.env.REACT_APP_MARVEL_PRIVATE_KEY +
        process.env.REACT_APP_MARVEL_PUBLIC_KEY,
    );

    config.params = {
      ...config.params,
      ts: timestamp,
      apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
      hash,
    };

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
