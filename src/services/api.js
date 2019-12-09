import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  // baseURL: 'http://localhost:3333'
  baseURL: 'https://backend-kiko-app.herokuapp.com'
});

api.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = localStorage.getItem('@kiko-token');

  if (token) {
    config.headers.Authorization = `jwt ${token}`;
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  error.response && toast.error(error.response.data.message || error.response.data.msg);
  return Promise.reject(error);
});


export default api;