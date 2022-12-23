import _init from './endpoints/initEndpoints';
import user from './endpoints/userEndpoints';
import weather from './endpoints/weatherEndpoints';
import geolocation from './endpoints/geoEndpoints';
import images from './endpoints/imageEndpoints';

const Api = {
    _init,
    user,
    weather,
    geo: geolocation,
    images,
}

export default Api;