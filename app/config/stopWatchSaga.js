import { takeEvery, call, put, select, take } from "redux-saga/effects";
import { CREATE_LAB, RESET_WATCH, START_WATCH, STOP_WATCH, UPDATE_TIME } from "../actions/stopWatch"
import stopWatchReducer from "../reducers/stopWatchReducer"
import StopWatch from "../model/StopWatch"
import { eventChannel } from "redux-saga"

const watchHandler = function* (action) {
    try {
        let channel;
        switch (action.type) {
            case CREATE_LAB:
                break;
            case RESET_WATCH:
                break;
            case START_WATCH:
                console.log("wtf", "start watchiiiiii");
                channel = yield call(StopWatch);
                yield call(stopWatchTracker, channel);
                yield put({
                    type: START_WATCH,
                })
                break;
            case STOP_WATCH:
                channel.stop();
                yield put({
                    type: STOP_WATCH,
                })
                break;
        }
    } catch (error) {
    }
};

const stopWatchTracker = function* (channel) {
    while (true) {
        let emitResult = yield take(channel);
        if (emitResult.type == UPDATE_TIME) {
            yield put(emitResult)
        }
    }
}

const stopWatchSaga = function* () {
    try {
        yield takeEvery(START_WATCH, watchHandler);
        yield takeEvery(STOP_WATCH, watchHandler);

    } catch (error) {
    }

}

export default stopWatchSaga;
