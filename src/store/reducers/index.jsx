// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import HeaderTab from "./tab";
import authReducer from "./user";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, HeaderTab, auth: authReducer });

export default reducers;
