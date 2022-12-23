import {
    userLogin, userLoginSucceed, userLoginFailed,
    userLogout, userLogoutSucceed, userLogoutFailed,
    userRegister, userRegisterFailed, userRegisterSucceed, userAddCity, userAddCityFailed, userAddCitySucceed
} from "../creators/userCreators"
import Api from "../../services/api";


export function loginAsyncAction(login, password) {
    return dispatch => {
        dispatch(userLogin());

        return Api.user.login(login, password)
            .then(res => {
                dispatch(userLoginSucceed(res));
                localStorage.setItem(
                    'authorizedUser',
                    JSON.stringify({ username: login, password })
                );
            })
            .catch(err => dispatch(userLoginFailed(err)))
    }
}


export function logoutAsyncAction() {
    return (dispatch) => {
        dispatch(userLogout());

        return Api.user.logout()
            .then(res => {
                dispatch(userLogoutSucceed(res));
                localStorage.setItem(
                    'authorizedUser',
                    JSON.stringify({ username: "", password: "" })
                );
            })
            .catch(err => dispatch(userLogoutFailed(err)))
    }
}


export function registerAsyncAction(username, email, password) {
    return dispatch => {
        dispatch(userRegister());

        return Api.user.register(username, email, password)
            .then(res => {
                dispatch(userRegisterSucceed(res));
                dispatch(loginAsyncAction(username, password));
            })
            .catch(err => dispatch(userRegisterFailed(err)))
    }
}


export function addNewCity(cityName) {
    cityName = cityName.toLowerCase().trim()
    return (dispatch, getState) => {
        dispatch(userAddCity());
        let { userID, cities } = getState().user

        return Api.user.saveUserCitiesArray(userID, cityName)
            .then((res) => {
                console.log(res);
                dispatch(userAddCitySucceed(res))
            })
            .catch((err) => {
                console.log(err);
                dispatch(userAddCityFailed(err))
            })
    }
}