// src/utils/axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://23.22.118.33:5000/api', // Replace with your backend URL
});

// Add a request interceptor to include the token in the Authorization header
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
