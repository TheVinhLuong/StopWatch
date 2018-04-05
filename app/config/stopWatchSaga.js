import { takeEvery, call, put, select, take } from "redux-saga/effects";
import { CREATE_LAB, RESET_WATCH, START_WATCH, STOP_WATCH, UPDATE_TIME } from "../actions/stopWatch"
import stopWatchReducer from "../reducers/stopWatchReducer"
import StopWatch from "../model/StopWatch"
import { eventChannel } from "redux-saga"

const watchHandler = function* (action) {
    try{
    switch (action.type) {
        case CREATE_LAB:
            break;
        case RESET_WATCH:
            break;
        case START_WATCH:
            break;
        case STOP_WATCH:
            break;
    }
    }catch(error){
    }
};
const stopWatchSaga = function* () {
    try {
        const channel = yield call(StopWatch);
        yield takeEvery(START_WATCH, watchHandler);
        while (true) {
            let emitResult  = yield take(channel);
            if (emitResult.type == UPDATE_TIME) {
                yield put(emitResult)
            }
        }
    } catch (error) {
    }

}

export default stopWatchSaga;
