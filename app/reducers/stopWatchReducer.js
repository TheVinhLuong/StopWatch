import {
    START_WATCH,
    STOP_WATCH,
    CREATE_LAB,
    RESET_WATCH,
    UPDATE_TIME
} from '../actions/stopWatch';

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case START_WATCH:
            return {
                ...state,
                stopWatchState: START_WATCH,
            }
            break;
        case STOP_WATCH:
            return {
                ...state,
                stopWatchState: STOP_WATCH,
            }
            break;
        // case CREATE_LAB:
        //     break;
        // case RESET_WATCH:
        //     break;
        case UPDATE_TIME:
            console.log("wtf", "UPDATEEEEE");
            return {
                ...state,
                elapsedTime: action.elapsedTime,
            }
        default:
            return state;
    }
}