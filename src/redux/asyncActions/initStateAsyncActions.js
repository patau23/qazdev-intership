import {
    initState,
    initStateSucceed,
    initStateFailed,
} from "../creators/initStateCreators"
import Api from "../../services/api";
import { getCityInformation } from "./weatherAsyncActions";

/* 

!!! THUNK WORKING HERE !!!

*/

export function initLocalStorageStateAsyncAction() {
    return (dispatch) => {
        dispatch(initState({ statusMessage: 'Загрузка Данных ...' }));

        return Api.init.initializeState(dispatch)
            .then(objectWithMessage => {
                return dispatch(initStateSucceed(objectWithMessage));
            })
            .catch(objectWithFailMessage => {
                return dispatch(initStateFailed(objectWithFailMessage));
            })
            .then(() => {
                // TODO: доделать автовызов 5 городов по умолчанию, добавить мемоизацию возможно
                let cities = ['New York', 'Moscow', 'Beijing', 'Paris', 'London']
                for (let key in cities) {
                    dispatch(getCityInformation(cities[key]))
                }
            })
    }
}