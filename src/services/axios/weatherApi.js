import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://api.open-meteo.com/v1' });

export default axiosInstance;