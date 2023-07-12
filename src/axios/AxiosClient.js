import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  timeout: 300000,
});

const noAuth = ["/login", "/accounts"];

const onRequest = (config) => {
  const { url } = config;
  if (!noAuth.includes(url)) {
    const accessToken = localStorage.getItem("accessToken");
    config.headers = { Authorization: `Bearer ${accessToken}` };
  }
  return config;
};
const onResponse = (response) => {
  return { data: response.data };
};
const onError = (error) => {
  return { err: error };
};
axiosClient.interceptors.request.use(onRequest);
axiosClient.interceptors.response.use(onResponse, onError);

export { axiosClient };
