import React, { useEffect } from "react"
import { timer, start, stop, reset,laps } from "./TimeReduce"
import { useSelector, useDispatch } from "react-redux"
import Button from "./button"

function Timer() {
    const started = useSelector(state => state.started)
    const mins = useSelector(state => state.mins)
    const secs = useSelector(state => state.secs)
    const milisecs = useSelector(state => state.milisecs)
    const lap = useSelector(state => state.lap)
    const dispatch = useDispatch()

    useEffect(() => {
        if (started) {   
            const startTime = setInterval(() => { dispatch(timer()) }, 1)
            return () => clearInterval(startTime)
        }
    })
    const data = lap.map((lap, index) => (
        <div>
            Laps {index} : {lap.mins} : {lap.secs} : {lap.milisecs}
        </div>
    ))
    return (
            <div>
                <div>
                    {mins < 10 ? <> 0{mins}</> : mins}:
                </div>

                <div >
                    {secs < 10 ? <> 0{secs}</> : secs}:
                </div>

                <div>
                    {milisecs}
                </div>
            

            <Button description="Start" onClick={() => { dispatch(start()) }} />
            <Button description="Stop" onClick={() => { dispatch(stop()) }} />
            <Button description="Lap" onClick={() => { dispatch(laps()) }} />
            <Button description="Reset" onClick={() => { dispatch(reset()) }} />
            <div>
                <h1>Laps:</h1>
                <h2> {data} </h2>
            </div>
        </div>
    )
}
export default Timer;