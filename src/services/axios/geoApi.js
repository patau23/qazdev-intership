import axios from 'axios'
import Cookies from 'js-cookie'

const axiosInstance = axios.create({
    // СОЗДАЕМ ЭКЗЕМПЛЯР БИБЛИОТЕКИ AXIOS,
    // В КОТОРОМ ПОМЕНЯЕМ НЕКОТОРЫЕ ФУНКЦИОНАЛ
    baseURL: 'https://geocoding-api.open-meteo.com/v1' // url апишки
});

axiosInstance.interceptors.request.use(
    (config) => {
        const sessionToken = Cookies.get('Session-Token')
        if (sessionToken) {
            // перехватчик, который перед запросом будет добавлять 
            // заголовок с токеном для авторизации если он есть в куки
            config.headers.authorization = `Bearer ${sessionToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;