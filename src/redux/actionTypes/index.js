// request's status
export const FETCHING = "__FETCHING";
export const SUCCEED = "__SUCCEED";
export const FAILED = "__FAILED";


// =====  ABOUT authorize and local storage requests  =====
// init state in localStorage
export const INIT_STATE_IN_LS = "INIT_LOCAL_STORAGE_STATE";
// user requests
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
// user's cities ruequests
export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";


// =====  ABOUT weather requests  =====
// forecast
export const WEATHER_DATA_REQUEST = "WEATHER_DATA_REQUEST";
// geolocation requests
export const GEOLOCATION_REQUEST = "GEOLOCATION_REQUEST";
// image requests
export const CITY_IMAGES_REQUEST = "CITY_IMAGES_REQUEST";


// =====  default object  =====
const ActionTypes = {
    FETCHING,
    SUCCEED,
    FAILED,

    LOGIN,
    LOGOUT,
    REGISTER,
    DELETE_ACCOUNT,
};

export default ActionTypes;