import {
    FETCHING, FAILED, SUCCEED,

    WEATHER_DATA_REQUEST,
    GEOLOCATION_REQUEST,
    CITY_IMAGES_REQUEST
} from "../actionTypes";

// for weather requests
export const weatherCityForecast = () => ({ type: WEATHER_DATA_REQUEST + FETCHING });
export const weatherCityForecastSucceed = (payload) => ({ type: WEATHER_DATA_REQUEST + SUCCEED, payload });
export const weatherCityForecastFailed = (payload) => ({ type: WEATHER_DATA_REQUEST + FAILED, payload });

// for get geolocation requests
export const weatherCityGeolocation = () => ({ type: GEOLOCATION_REQUEST + FETCHING });
export const weatherCityGeolocationSucceed = (payload) => ({ type: GEOLOCATION_REQUEST + SUCCEED, payload });
export const weatherCityGeolocationFailed = (payload) => ({ type: GEOLOCATION_REQUEST + FAILED, payload });

// for get images requests
export const weatherCityImages = () => ({ type: CITY_IMAGES_REQUEST + FETCHING });
export const weatherCityImagesSucceed = (payload) => ({ type: CITY_IMAGES_REQUEST + SUCCEED, payload });
export const weatherCityImagesFailed = (payload) => ({ type: CITY_IMAGES_REQUEST + FAILED, payload });