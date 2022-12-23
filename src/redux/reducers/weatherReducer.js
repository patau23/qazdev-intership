import {
    FETCHING, SUCCEED, FAILED,
    WEATHER_DATA_REQUEST,
    GEOLOCATION_REQUEST,
    CITY_IMAGES_REQUEST,
} from "../actionTypes/index";

const defaultStockImage = 'https://i.pinimg.com/originals/44/50/47/445047a05f907af7dd100e1d53beb868.jpg';

const initialState = {
    isLoading: false,
    statusMessage: "",
    cities: [],
};

const weatherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case WEATHER_DATA_REQUEST + FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case WEATHER_DATA_REQUEST + SUCCEED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage,
                cities: state.cities.map(city => {
                    if (city.name === payload.cityName) {
                        city.currentWeather = payload.currentWeather
                        city.daily = payload.daily
                    }
                    return city;
                })
            };
        case WEATHER_DATA_REQUEST + FAILED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage,
            };

        case GEOLOCATION_REQUEST + FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case GEOLOCATION_REQUEST + SUCCEED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage,
                cities: [
                    ...state.cities,
                    {
                        id: Date.now(),
                        image: '',
                        name: payload.cityName,
                        latitude: payload.latitude,
                        longitude: payload.longitude,
                        currentWeather: {},
                        daily: { time: [], weathercode: [] }
                    }
                ]
            };
        case GEOLOCATION_REQUEST + FAILED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage,
            };

        case CITY_IMAGES_REQUEST + FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case CITY_IMAGES_REQUEST + SUCCEED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage,
                cities: state.cities.map(city => {
                    if (city.name === payload.cityName) city.image = payload.images[1]
                    return city;
                })
            };
        case CITY_IMAGES_REQUEST + FAILED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage,
                cities: state.cities.map(city => {
                    if (city.name === payload.cityName) city.image = defaultStockImage
                    return city;
                })
            };

        default: return state;
    }
};

export default weatherReducer;