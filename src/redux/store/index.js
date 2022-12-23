import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// Reducers imports
import userReducer from '../reducers/userReducer'
import initStateReducer from "../reducers/initStateReducer";
import weatherReducer from "../reducers/weatherReducer";

const appReducer = combineReducers({
    localStorageStatement: initStateReducer,
    user: userReducer,
    weather: weatherReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'TERMINATE_STORE') {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;