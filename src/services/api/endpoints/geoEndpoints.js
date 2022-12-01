import axios from '../../axios/geoApi.js'

const geolocation = {
    getCityLatLon: (city) => axios.get(`/search?name=${city}&count=1`)
        .then(data => {
            return {
                latitude: data.data?.results?.[0].latitude,
                longitude: data.data?.results?.[0].longitude
            };
        })
};
// https://geocoding-api.open-meteo.com/v1/search?name=Karaganda&count=1
export default geolocation;