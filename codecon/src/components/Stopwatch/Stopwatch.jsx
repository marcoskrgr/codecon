import React, { useEffect, useState, useCallback, useMemo } from "react";

export function Stopwatch () {
    const [ timeCount, setTimeCount ] = useState(30);
    const [ timeEnded, setTimeEnded ] = useState(false);
    const [ countInterval, setCountInterval] = useState()

    const timer = {
        clock: () => setInterval(decreaseCount, 1000)
    }

    const decreaseCount = () => {
        setTimeCount(prev =>  {
            const newTimeCount = prev-1;
            watchEnd(newTimeCount);
            return newTimeCount;
        });
    };
    
    const watchEnd = (count) => {
        if (count == 0){
            setTimeEnded(true);
            return 1;
        }
        return 0;
    }; 
    
    // Função para iniciar o timer
    const startStopwatch = () => {
        setCountInterval(timer.clock())
    }

    useEffect(()=> {
        if(timeEnded){
            clearInterval(countInterval)
        }
    }, [timeCount]);

    return (
        <div>
            <button onClick={startStopwatch}>Start</button>
            {"Quando chegar em 0 para: " + timeCount}
        </div>
    )
}

export default Stopwatch;