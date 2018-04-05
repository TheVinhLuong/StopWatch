import {combineReducers} from 'redux';
import tempReducer from "./tempReducer"
import stopWatchReducer from "./stopWatchReducer"
export default combineReducers({
    tempReducer,
    stopWatchReducer,
});