import { eventChannel, END } from "redux-saga";
import { UPDATE_TIME } from "../actions/stopWatch"


export default function () {
    var offset,
        clock,
        interval, emmi;

    function start() {
        if (!interval) {
            offset = Date.now();
            interval = setInterval(update, 1);
        }
    }

    function stop() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }


    function reset() {
        clock = 0;
    }

    function update() {
        emmi({
            type: UPDATE_TIME,
            elapsedTime: clock/1000
        });
        clock += 1;
    }

    function getTime() {
        return clock;
    }

    return eventChannel(emitter => {
        emmi = emitter;
        reset();
        start();

        return () => {
            stop();
        };
    })



    // function delta() {
    //     var now = Date.now(),
    //         d = now - offset;

    //     offset = now;
    //     return d;
    // }
}
