import dataAPI from "./dataAPI";
import urlData from "./urlData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    data : dataAPI,
    url : urlData


})

export default allReducers;