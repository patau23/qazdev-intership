import {
    FETCHING, SUCCEED, FAILED,
    LOGIN, LOGOUT, REGISTER, DELETE_ACCOUNT,
} from "../actionTypes/index";


const initialState = {
    isLoading: false,
    statusMessage: "",
    userID: "",
    username: "",
    email: "",
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN + FETCHING:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN + SUCCEED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage,
                userID: payload.id,
                username: payload.username,
                email: payload.email
            };
        case LOGIN + FAILED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage,
            };

        // =======================================================

        case REGISTER + FETCHING:
            return {
                ...state,
                isLoading: true
            };
        case REGISTER + SUCCEED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage
            };
        case REGISTER + FAILED:
            return {
                ...state,
                isLoading: false,
                statusMessage: payload.statusMessage
            };

        // =======================================================

        case LOGOUT + FETCHING:
            return {
                ...state,
                isLoading: true
            };
        case LOGOUT + SUCCEED:
            return {
                ...initialState,
                statusMessage: payload.statusMessage
            };
        case LOGOUT + FAILED:
            return {
                ...initialState,
                statusMessage: payload.statusMessage
            };

        // =======================================================

        case DELETE_ACCOUNT + FETCHING:
            return {
                ...state,
                isLoading: true
            };
        // TODO:
        case DELETE_ACCOUNT + SUCCEED:
            return {
                // ???
            };
        case DELETE_ACCOUNT + FAILED:
            return {
                ...state,
                statusMessage: payload.statusMessage
            };

        // =======================================================

        default:
            return state
    }
};

export default userReducer;