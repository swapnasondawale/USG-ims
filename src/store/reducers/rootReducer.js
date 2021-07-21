import { combineReducers } from "redux";
import CreateCaseReducer from "./CreateCaseReducer";
import LoginReducer from "./LoginReducer";

export default combineReducers({

    LoginReducer: LoginReducer,
    CreateCaseReducer: CreateCaseReducer

});
