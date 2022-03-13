import dataAPI from "./dataAPI";
import urlData from "./urlData";
import urlNext from "./urlNext";
import urlPrev from "./urlPrev";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    data : dataAPI,
    url : urlData,
    next : urlNext,
    prev : urlPrev


})

export default allReducers;