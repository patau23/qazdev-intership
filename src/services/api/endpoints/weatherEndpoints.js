import axios from '../../axios/weatherApi.js';

const weather = {
    getCityForecast: (lat, long) => {
        return axios.get(`/forecast?latitude=${lat}&longitude=${long}&daily=weathercode&current_weather=true&timezone=auto&past_days=7`);
    }
};

export default weather;