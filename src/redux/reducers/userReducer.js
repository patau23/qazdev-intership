import {
    FETCHING, SUCCEED, FAILED,
    LOGIN,
    LOGOUT,
    REGISTER,
    ADD_CITY,
} from "../actionTypes/index";


const initialState = {
    isLoading: false,
    statusMessage: "",
    userID: "",
    username: "",
    email: "",
    cities: []
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
                email: payload.email,
                cities: [...payload.cities]
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
                statusMessage: payload.statusMessage,
                cities: ['new york', 'moscow', 'beijing', 'paris', 'london']
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

        case ADD_CITY + FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case ADD_CITY + SUCCEED:
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, payload.city]
            };
        case ADD_CITY + FAILED:
            return {
                ...state,
                isLoading: false,
            };
        // =======================================================

        default:
            return state
    }
};

export default userReducer;