import { combineReducers } from "redux";
import {modalReducer} from "./modalReducers.js"
import { loaderReducer } from "./loaderReducer.js";
import { authReducer } from "./authReducer.js";


export default combineReducers({
    authReducer,
    modalReducer,
    loaderReducer
});