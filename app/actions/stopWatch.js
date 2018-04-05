export const START_WATCH = "START_WATCH";
export const STOP_WATCH = "STOP_WATCH";
export const CREATE_LAB = "CREATE_LAB";
export const RESET_WATCH = "RESET_WATCH";
export const UPDATE_TIME = "UPDATE_TIME";

export const fireUpdateTime = () => ({
    type: UPDATE_TIME,
})

export const fireStartWatch = () => ({
    type: START_WATCH,
});

export const fireStopWatch = () => ({
    type: STOP_WATCH,
})

export const fireCreateLab = () => ({
    type: CREATE_LAB,
})

export const fireResetWatch = () => ({
    type: FIRE_RESET_WATCH,
})
