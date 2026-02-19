import Axios from 'axios';
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {'Content-Type': 'application/json'},
});

// Interception de la requête pour injecter
// le token JWT
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if(error.response && error.response.status === 401) {
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
)

export default api;

export const authApi = {
    login: (email, password) => api.post('/auth/login', {email, password}),
    register: (email, password, name) => api.post('/auth/register', {email, password, name}),
    verify: () => api.get('/auth/verify'),

};
