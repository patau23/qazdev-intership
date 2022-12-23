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
                    statusMessage: `${cityName} weather forecast data is not available now`,
                }));
            })
    }
}

// get location
export function getCityGeolocation(cityName) {
    return dispatch => {
        dispatch(weatherCityGeolocation());

        return Api.geo.getCityLatLon(cityName)
            .then(res => {
                dispatch(weatherCityGeolocationSucceed({
                    ...res,
                    cityName,
                    statusMessage: ``,
                }));
            })
            .catch((err) => {
                console.log(err);
                dispatch(weatherCityGeolocationFailed({
                    statusMessage: `There is no city which name is ${cityName}`,
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
    cityName = cityName.toLowerCase().trim()
    return (dispatch, getState) =>
        new Promise((resolve, reject) => {
            const nameList = getState().weather.cities.map(city => city.name)
            const doesCityIncludes = nameList.includes(cityName)
            if (!doesCityIncludes) {
                resolve()
            }
            reject()
        })
            .then(() => {
                return dispatch(getCityGeolocation(cityName))
            })
            .then(() => {
                const { latitude, longitude } = getState().weather.cities.find(city => city.name === cityName);
                return dispatch(getCityWeatherForecast(latitude, longitude, cityName))
            })
            .then(() => {
                return dispatch(getCityImage(cityName))
            })
            .catch(() => {
                console.log('');
            })
}