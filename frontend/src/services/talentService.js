// jobService.js - API service functions
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

// Create axios instance with base configuration
const api = axios.create({
  //   baseURL: "http://localhost:5000/api",
  baseURL: apiUrl, // Replace with your actual API base URL
  timeout: 10000, // 10 seconds timeout
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("authToken") || localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("authToken");
      localStorage.removeItem("token");
      // Redirect to login page
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

// Talent service functions
export const talentService = {
  // get all talents
  getAllTalents: async () => {
    try {
      const response = api.get("/api/user");
      return response
    } catch (err) {
        throw err;
    }
  },
};
