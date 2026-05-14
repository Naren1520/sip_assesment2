import axios from 'axios';

// Create axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
});

// Request interceptor to add token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: (data) => API.post('/auth/register', data),
  login: (data) => API.post('/auth/login', data),
  logout: () => API.get('/auth/logout'),
  getMe: () => API.get('/auth/me'),
};

// Student API calls
export const studentAPI = {
  getProfile: () => API.get('/student/profile'),
  updateProfile: (data) => API.put('/student/profile', data),
  changePassword: (data) => API.post('/student/change-password', data),
  getDashboardStats: () => API.get('/student/dashboard-stats'),
};

// Admin API calls
export const adminAPI = {
  getAllUsers: (params) => API.get('/admin/users', { params }),
  getUserById: (id) => API.get(`/admin/users/${id}`),
  deleteUser: (id) => API.delete(`/admin/users/${id}`),
  updateUserRole: (id, data) => API.put(`/admin/users/${id}/role`, data),
  deactivateUser: (id) => API.put(`/admin/users/${id}/deactivate`),
  activateUser: (id) => API.put(`/admin/users/${id}/activate`),
};

export default API;
