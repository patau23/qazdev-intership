import {
    FETCHING, SUCCEED, FAILED,

    WEATHER_DATA_REQUEST,
    GEOLOCATION_REQUEST,
    CITY_IMAGES_REQUEST,
} from "../actionTypes/index";

const defaultStockImage =
    'https://i.pinimg.com/originals/44/50/47/445047a05f907af7dd100e1d53beb868.jpg';

// const cities = [
//     {
//         id: 1,
//         image: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg',
//         name: "New York",
//         latitude: 40.71,
//         longitude: -74.00,
//         currentWeather: {
//             temperature: 4.9,
//             windspeed: 2.2,
//             winddirection: 9.0,
//             weathercode: 2,
//             time: "2022-11-28T01:00"
//         },
//         daily: {
//             time: [
//                 '2022-10-29', '2022-10-30', '2022-10-31',
//                 '2022-11-01', '2022-11-02', '2022-11-03',
//                 '2022-11-04', '2022-11-05', '2022-11-06',
//                 '2022-11-07', '2022-11-08', '2022-11-09',
//                 '2022-11-10', '2022-11-11', '2022-11-12',
//                 '2022-11-13', '2022-11-14', '2022-11-15',
//                 '2022-11-16', '2022-11-17', '2022-11-18',
//                 '2022-11-19', '2022-11-20', '2022-11-21',
//                 '2022-11-22', '2022-11-23', '2022-11-24',
//                 '2022-11-25', '2022-11-26', '2022-11-27',
//                 '2022-11-28'
//             ],
//             weathercode: [
//                 3, 3, 3, 61, 63, 80, 80, 80, 80,
//                 80, 80, 3, 3, 2, 3, 1, 3, 3, 2,
//                 2, 3, 3, 3, 3, 3, 80, 80, 80, 3,
//                 3, 3,
//             ]
//         },
//     },
//     {
//         id: 2,
//         image: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/moscow-99ccf7ba84.jpg',
//         name: "Moscow",
//         latitude: 55.75,
//         longitude: 37.61,
//         currentWeather: {
//             temperature: 4.9,
//             windspeed: 2.2,
//             winddirection: 9.0,
//             weathercode: 2,
//             time: "2022-11-28T01:00"
//         },
//         daily: {
//             time: [
//                 '2022-10-29', '2022-10-30', '2022-10-31',
//                 '2022-11-01', '2022-11-02', '2022-11-03',
//                 '2022-11-04', '2022-11-05', '2022-11-06',
//                 '2022-11-07', '2022-11-08', '2022-11-09',
//                 '2022-11-10', '2022-11-11', '2022-11-12',
//                 '2022-11-13', '2022-11-14', '2022-11-15',
//                 '2022-11-16', '2022-11-17', '2022-11-18',
//                 '2022-11-19', '2022-11-20', '2022-11-21',
//                 '2022-11-22', '2022-11-23', '2022-11-24',
//                 '2022-11-25', '2022-11-26', '2022-11-27',
//                 '2022-11-28'
//             ],
//             weathercode: [
//                 3, 3, 3, 61, 63, 80, 80, 80, 80,
//                 80, 80, 3, 3, 2, 3, 1, 3, 3, 2,
//                 2, 3, 3, 3, 3, 3, 80, 80, 80, 3,
//                 3, 3,
//             ]
//         },
//     },
//     {
//         id: 3,
//         image: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/beijing-536dacdadf.jpg',
//         name: "Beijing",
//         latitude: 39.90,
//         longitude: 116.39,
//         currentWeather: {
//             temperature: 4.9,
//             windspeed: 2.2,
//             winddirection: 9.0,
//             weathercode: 2,
//             time: "2022-11-28T01:00"
//         },
//         daily: {
//             time: [
//                 '2022-10-29', '2022-10-30', '2022-10-31',
//                 '2022-11-01', '2022-11-02', '2022-11-03',
//                 '2022-11-04', '2022-11-05', '2022-11-06',
//                 '2022-11-07', '2022-11-08', '2022-11-09',
//                 '2022-11-10', '2022-11-11', '2022-11-12',
//                 '2022-11-13', '2022-11-14', '2022-11-15',
//                 '2022-11-16', '2022-11-17', '2022-11-18',
//                 '2022-11-19', '2022-11-20', '2022-11-21',
//                 '2022-11-22', '2022-11-23', '2022-11-24',
//                 '2022-11-25', '2022-11-26', '2022-11-27',
//                 '2022-11-28'
//             ],
//             weathercode: [
//                 3, 3, 3, 61, 63, 80, 80, 80, 80,
//                 80, 80, 3, 3, 2, 3, 1, 3, 3, 2,
//                 2, 3, 3, 3, 3, 3, 80, 80, 80, 3,
//                 3, 3,
//             ]
//         },
//     },
//     // {
//     //     id: 4,
//     //     image: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris-0ae0bb626e.jpg',
//     //     name: "Paris",
//     //     latitude: 48.85,
//     //     longitude: 2.34,
//     //     currentWeather: {
//     //         temperature: 4.9,
//     //         windspeed: 2.2,
//     //         winddirection: 9.0,
//     //         weathercode: 2,
//     //         time: "2022-11-28T01:00"
//     //     },
//     //     daily: {
//     //         time: [
//     //     '2022-10-29', '2022-10-30', '2022-10-31',
//     //     '2022-11-01', '2022-11-02', '2022-11-03',
//     //     '2022-11-04', '2022-11-05', '2022-11-06',
//     //     '2022-11-07', '2022-11-08', '2022-11-09',
//     //     '2022-11-10', '2022-11-11', '2022-11-12',
//     //     '2022-11-13', '2022-11-14', '2022-11-15',
//     //     '2022-11-16', '2022-11-17', '2022-11-18',
//     //     '2022-11-19', '2022-11-20', '2022-11-21',
//     //     '2022-11-22', '2022-11-23', '2022-11-24',
//     //     '2022-11-25', '2022-11-26', '2022-11-27',
//     //     '2022-11-28'
//     // ],
//     //     weathercode: [
//     //         3, 3, 3, 61, 63, 80, 80, 80, 80,
//     //         80, 80, 3, 3, 2, 3, 1, 3, 3, 2,
//     //         2, 3, 3, 3, 3, 3, 80, 80, 80, 3,
//     //         3, 3,
//     //     ]
//     //     },
//     // },
//     // {
//     //     id: 5,
//     //     image: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/london-12fdfd9fcf.jpg',
//     //     name: "London",
//     //     latitude: 51.50,
//     //     longitude: -0.12,
//     //     currentWeather: {
//     //         temperature: 4.9,
//     //         windspeed: 2.2,
//     //         winddirection: 9.0,
//     //         weathercode: 2,
//     //         time: "2022-11-28T01:00"
//     //     },
//     //     daily: {
//     //         time: [
//     //     '2022-10-29', '2022-10-30', '2022-10-31',
//     //     '2022-11-01', '2022-11-02', '2022-11-03',
//     //     '2022-11-04', '2022-11-05', '2022-11-06',
//     //     '2022-11-07', '2022-11-08', '2022-11-09',
//     //     '2022-11-10', '2022-11-11', '2022-11-12',
//     //     '2022-11-13', '2022-11-14', '2022-11-15',
//     //     '2022-11-16', '2022-11-17', '2022-11-18',
//     //     '2022-11-19', '2022-11-20', '2022-11-21',
//     //     '2022-11-22', '2022-11-23', '2022-11-24',
//     //     '2022-11-25', '2022-11-26', '2022-11-27',
//     //     '2022-11-28'
//     // ],
//     //     weathercode: [
//     //         3, 3, 3, 61, 63, 80, 80, 80, 80,
//     //         80, 80, 3, 3, 2, 3, 1, 3, 3, 2,
//     //         2, 3, 3, 3, 3, 3, 80, 80, 80, 3,
//     //         3, 3,
//     //     ]
//     //     },
//     // },
// ]

const cities = []

const initialState = {
    isLoading: false,
    statusMessage: "",
    // TODO: объект newCity для проверок и прочего
    newCity: {},
    cities: [...cities],
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

        // =======================================================

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

        // =======================================================

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

        // =======================================================

        default: return state;
    }
};

export default weatherReducer;