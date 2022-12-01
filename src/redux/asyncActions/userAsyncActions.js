import {
    userLogin, userLoginSucceed, userLoginFailed,

    userLogout, userLogoutSucceed, userLogoutFailed,

    userRegister, userRegisterFailed, userRegisterSucceed
} from "../creators/userCreators"

import Api from "../../services/api";

/* 

!!! THUNK WORKING HERE !!!

*/

export function loginAsyncAction(login, password) {
    return dispatch => {
        dispatch(userLogin());

        return Api.user.login(login, password)
            .then(user => {
                dispatch(userLoginSucceed(user));
                localStorage.setItem(
                    'authorizedUser',
                    JSON.stringify({ username: login, password })
                );
            })
            .catch(objectWithFailMessage => {
                dispatch(userLoginFailed(objectWithFailMessage))
            })
    }
}


export function logoutAsyncAction() {
    return dispatch => {
        dispatch(userLogout());

        return Api.user.logout()
            .then(objectWithMessage => {
                dispatch(userLogoutSucceed(objectWithMessage))
                localStorage.setItem(
                    'authorizedUser',
                    JSON.stringify({ username: "", password: "" })
                );
            })
            .catch(objectWithFailMessage => {
                dispatch(userLogoutFailed(objectWithFailMessage))
            })
    }
}


export function registerAsyncAction(username, email, password) {
    return dispatch => {
        dispatch(userRegister())

        return Api.user.register(username, email, password)
            .then(user => {
                dispatch(userRegisterSucceed(user))
                dispatch(loginAsyncAction(username, password))
            })
            .catch(obj => dispatch(userRegisterFailed(obj)))
    }
}

// TODO: подтверждение пароля нужно для сброса пароля и для удаления аккаунта
// export function confirmPasswordAsyncAction(login, email, password) {

// }

// TODO: удаление аккаунта
// export function deleteAccountAsyncAction(login, email, password) {

// }