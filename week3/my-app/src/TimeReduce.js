const initialState = {
    time: new Date(),
    secs: 0,
    mins: 0,
    milisecs: 0,
    started: false,
    pause: false,
    lap: []
}
export function timer() {
    return {
        type: "Timer "
    }
}
export function start() {
    return {
        type: "Start"
    }
}
export function stop() {
    return {
        type: "Stop"
    }
}
export function laps() {
    return {
        type: "LAP"
    }
}
export function reset() {
    return {
        type: "Reset"
    }
}
function TimeReduce(state = initialState, action) {
    if (action.type === "Timer") {
        let time = state.time
        let milisecs = Date.now() - state.time
        let secs = state.secs
        let mins = state.mins


        if (state.paused) {
            time = new Date(state.time - state.milisecs)
            milisecs = Date.now() - time
        }
        if (milisecs >= 1000) {
            secs += 1
            time = new Date()
        }
        if (secs >= 60) {
            secs = 0
            mins += 1
        }
        return {
            ...state,
            time:time,
            milisecs: milisecs,
            secs : secs,
            mins : mins, 
            paused: false
        }
    }
    if (action.type === "Start"){
        let newTime = new Date()
        return{
            ...state,
            time: newTime,
            started: true,
        }
    }
    if (action.type === "Stop") {
        return {
            ...state,
            start: false,
            pause: true
        }
    }
    if (action.type === "Lap") {
        let laps = {
            "mins": state.mins,
            "secs": state.secs,
            "milisecs": state.milisecs
        }
        return {
            ...state,
            lap: [...state.lap, laps]
        }
    }
    if (action.type === "Reset") {
        return {
            ...state,
            time: new Date(),
            start: false,
            mins: 0,
            secs: 0,
            milisecs: 0,
            pause: false,
            laps: []
        }
    }
    return state;
}

export default TimeReduce