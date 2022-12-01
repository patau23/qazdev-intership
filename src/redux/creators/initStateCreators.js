import {
    FAILED,
    SUCCEED,
    FETCHING,

    INIT_STATE_IN_LS,
} from "../actionTypes";

export const initState = (payload) => ({ type: INIT_STATE_IN_LS + FETCHING, payload });
export const initStateSucceed = (payload) => ({ type: INIT_STATE_IN_LS + SUCCEED, payload });
export const initStateFailed = (payload) => ({ type: INIT_STATE_IN_LS + FAILED, payload });
