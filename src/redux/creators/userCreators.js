import {
    FETCHING, FAILED, SUCCEED,

    LOGIN,
    REGISTER,
    LOGOUT,
    DELETE_ACCOUNT,
    ADD_CITY,
    DELETE_CITY
} from "../actionTypes";

// for login
export const userLogin = () => ({ type: LOGIN + FETCHING });
export const userLoginSucceed = (payload) => ({ type: LOGIN + SUCCEED, payload });
export const userLoginFailed = (payload) => ({ type: LOGIN + FAILED, payload });

// for logout
export const userLogout = () => ({ type: LOGOUT + FETCHING });
export const userLogoutSucceed = (payload) => ({ type: LOGOUT + SUCCEED, payload });
export const userLogoutFailed = (payload) => ({ type: LOGOUT + FAILED, payload });

// for register
export const userRegister = () => ({ type: REGISTER + FETCHING });
export const userRegisterSucceed = (payload) => ({ type: REGISTER + SUCCEED, payload });
export const userRegisterFailed = (payload) => ({ type: REGISTER + FAILED, payload });

// for delete account
export const userDeleteAccount = () => ({ type: DELETE_ACCOUNT + FETCHING });
export const userDeleteAccountSucceed = (payload) => ({ type: DELETE_ACCOUNT + SUCCEED, payload });
export const userDeleteAccountFailed = (payload) => ({ type: DELETE_ACCOUNT + FAILED, payload });

// for change city list 
export const userAddCity = () => ({ type: ADD_CITY + FETCHING });
export const userAddCitySucceed = (payload) => ({ type: ADD_CITY + SUCCEED, payload });
export const userAddCityFailed = (payload) => ({ type: ADD_CITY + FAILED, payload });

export const userDeleteCity = () => ({ type: DELETE_CITY + FETCHING });
export const userDeleteCitySucceed = (payload) => ({ type: DELETE_CITY + SUCCEED, payload });
export const userDeleteCityFailed = (payload) => ({ type: DELETE_CITY + FAILED, payload });