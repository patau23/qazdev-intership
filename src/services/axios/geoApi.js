import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://geocoding-api.open-meteo.com/v1'
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.data?.results[0]?.latitude === undefined ||
            response.data?.results[0]?.longitude === undefined) {
            throw new Error('There is no coordinates of city')
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;