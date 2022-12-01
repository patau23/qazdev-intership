import {
    weatherCityForecast,
    weatherCityForecastFailed,
    weatherCityForecastSucceed,

    weatherCityGeolocation,
    weatherCityGeolocationFailed,
    weatherCityGeolocationSucceed,

    weatherCityImages,
    weatherCityImagesFailed,
    weatherCityImagesSucceed
} from '../creators/weatherCreators.js'

import Api from "../../services/api";

/* !!! THUNK WORKING HERE !!! */

// get weather info
export function getCityWeatherForecast(latitude, longitude, cityName) {
    return dispatch => {
        dispatch(weatherCityForecast());

        return Api.weather.getCityForecast(latitude.toFixed(2), longitude.toFixed(2))
            .then(payload => {
                dispatch(weatherCityForecastSucceed({
                    currentWeather: payload?.data?.current_weather,
                    daily: payload?.data?.daily,
                    statusMessage: ``,
                    cityName,
                }));
            })
            .catch(() => {
                dispatch(weatherCityForecastFailed({
                    statusMessage: `Данные о погоде города ${cityName} не доступны`,
                }));
            })
    }
}

// get location
export function getCityGeolocation(cityName) {
    return dispatch => {
        dispatch(weatherCityGeolocation());

        return Api.geo.getCityLatLon(cityName)
            .then(payload => {
                // TODO: также убрать условие и сделать через интерсепторы
                if (payload.latitude === undefined && payload.longitude === undefined) {
                    throw new Error(
                        'Api call error: couldn\'t make a request to geolocation api with undefined value'
                    )
                } else {
                    dispatch(weatherCityGeolocationSucceed({
                        ...payload,
                        cityName,
                        statusMessage: ``,
                    }));
                }
            })
            .catch(() => {
                dispatch(weatherCityGeolocationFailed({
                    statusMessage: `Такого города, как: ${cityName} - не существует`,
                }));
            })
    }
}

// get image of city
export function getCityImage(cityName) {
    return dispatch => {
        dispatch(weatherCityImages())
        return Api.images.getCityImages(cityName)
            .then(payload => {
                dispatch(weatherCityImagesSucceed({
                    cityName,
                    images: payload,
                    statusMessage: ``,
                }))
            })
            .catch(() => {
                dispatch(weatherCityImagesFailed({
                    cityName,
                    statusMessage: ``,
                }))
            })
    }
}

// chaining async actions
export function getCityInformation(cityName) {
    cityName = cityName.toLowerCase()
    return (dispatch, getState) =>
        dispatch(getCityGeolocation(cityName))
            .then(() => {
                const { latitude, longitude } = getState().weather.cities.find(city => {
                    return city.name === cityName;
                });
                // TODO: УБРАТЬ ЭТУ ХУЙНЮ И ЗАМЕНИТЬ НА axios.interceptors (Миша сказал не использовать такие условия в асинхронных экшенах, а лучше делать такое условие в аксиосе (т.е. папка api/axios))
                if (latitude === undefined || longitude === undefined) {
                    throw new Error('fuck')
                }
                return dispatch(getCityWeatherForecast(latitude, longitude, cityName))
            })
            .then(() => {
                return dispatch(getCityImage(cityName))
            })
            .catch(() => { })
}
