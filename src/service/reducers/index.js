import dataAPI from "./dataAPI";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    data : dataAPI,
    
})

export default allReducers;