import { FETCHING, SUCCEED, FAILED, INIT_STATE_IN_LS, } from "../actionTypes/index";

const initialState = {
    isLoading: false,
    statusMessage: '',
};

const initStateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INIT_STATE_IN_LS + FETCHING:
            return { ...state, isLoading: true, statusMessage: payload.statusMessage };
        case INIT_STATE_IN_LS + SUCCEED:
            return { ...state, isLoading: false, statusMessage: payload.statusMessage };
        case INIT_STATE_IN_LS + FAILED:
            return { ...state, isLoading: false, statusMessage: payload.statusMessage };
        default:
            return state;
    }
};

export default initStateReducer;