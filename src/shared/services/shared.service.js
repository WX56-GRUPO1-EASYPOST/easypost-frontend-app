/*
import axios from "axios"
const axiosInstance = axios.create({
    baseURL: "http://localhost:5134/api/v1",
    headers:{
        'Authorization':'Bearer '+localStorage.getItem('token')
    }
})

//Vue.prototype.$htpp = axiosInstance;

export default axiosInstance;*/
import axios from "axios";

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: "http://localhost:5134/api/v1",
    headers: {
        'Authorization': token ? Bearer ${token} : ''
    }
});

// Interceptor para manejar errores globalmente
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // Manejo de errores
        if (error.response && error.response.status === 401) {
            // Aquí podrías redirigir al usuario a la página de login o refrescar el token
            console.error("No autorizado, redirigir al login.");
        }
        return Promise.reject(error);
    }
);

// Interceptor para actualizar el token en cada solicitud
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = Bearer ${token};
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;