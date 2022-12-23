import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://api.teleport.org/api' });

export default axiosInstance;