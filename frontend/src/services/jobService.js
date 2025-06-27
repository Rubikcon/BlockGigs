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

// Job service functions
export const jobService = {
  // Create a new job
  createJob: async (jobData) => {
    try {
      // Validate and format the data
      const payload = {
        title: jobData.title,
        detail: jobData.detail,
        totalPrice: parseFloat(jobData.totalPrice),
        milestone: parseInt(jobData.milestone),
        milestones: jobData.milestones.map((ms) => ({
          description: ms.description,
          deadline: new Date(ms.deadline).toISOString(),
          amount: parseFloat(ms.amount),
        })),
      };

      const response = await api.post("/api/jobs", payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get all jobs
  getAllJobs: async () => {
    try {
      const response = await api.get("/api/jobs");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get jobs by client ID
  getJobsbyClient: async (clientId) => {
    try {
      const response = await api.get(`/api/jobs/${clientId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get single job by ID
  getJobById: async (jobId) => {
    try {
      const response = await api.get(`/api/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Apply for a job
  applyForJob: async (jobId, applicantId) => {
    try {
      const response = await api.put(`/api/jobs/apply/${jobId}`, {
        applicantId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get jobs a user has applied to
  getAppliedJobsByUser: async (userId) => {
    try {
      const response = await api.get(`/api/jobs/${userId}/applied-jobs`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // ============================
  // ADVANCED FUNCTIONS SETUP
  // ============================

  // Client approves job applied by a talent
  clientApprovesJob: async (jobId) => {
    try {
      const response = await api.put(`/api/${jobId}/approve`);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  // Client rejects jobs applied by a talent
  clientRejectsJob: async (jobId) => {
    try {
      const response = await api.put(`/api/${jobId}/reject`);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  // talent submits job completion
  submitJobCompletion: async () => {
    try {
      const response = await api.put(`/api/${jobId}/submit-completion`);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  // client accept job done by talent and close job

  acceptCompletionAndCloseJob: async (jobId) => {
    try {
      const response = await api.put(`/api/${jobId}/accept-completion`);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  // let talent gets applied jobs that are still waiting approval

  getJobsAwaitingApproval: async () => {
    try {
      const response = await api.get("/api/client/awaiting-approval");
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  // get client jobs stats
  getClientJobStats: async () => {
    try {
      const response = await api.get("/api/client/stats");
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};
