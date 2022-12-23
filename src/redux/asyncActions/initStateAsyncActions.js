import {
    initState,
    initStateSucceed,
    initStateFailed,
} from "../creators/initStateCreators";
import Api from "../../services/api";
import { loginAsyncAction } from "./userAsyncActions";


export function initLocalStorageStateAsyncAction() {
    return (dispatch) => {
        dispatch(initState({ statusMessage: 'Загрузка Данных ...' }));

        return Api._init.initializeState(dispatch)
            .then(response => {
                dispatch(initStateSucceed(response))
                dispatch(loginAsyncAction(
                    response.authorizedUser.username,
                    response.authorizedUser.password
                ))
            })
            .catch(err => {
                return dispatch(initStateFailed(err));
            })
    }
}