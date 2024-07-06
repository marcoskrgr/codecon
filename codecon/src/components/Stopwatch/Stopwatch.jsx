import React, { useEffect, useState, useCallback, useMemo } from "react";
import { SiStagetimer } from "react-icons/si";

export function Stopwatch () {
    const [ timeCount, setTimeCount ] = useState(0);
    const [ timeEnded, setTimeEnded ] = useState(false);
    const [ countInterval, setCountInterval] = useState();
    const [ animate, setAnimate] = useState(false);

    const timer = {
        clock: () => setInterval(decreaseCount, 1000)
    }

    const decreaseCount = () => {
        setTimeCount(prev =>  {
            const newTimeCount = prev+1;
            watchEnd(newTimeCount);
            return newTimeCount;
        });
    };
    
    const watchEnd = (count) => {
        if (count == 10){
            setTimeEnded(true);
            setAnimate(false);
            return 1;
        }
        return 0;
    }; 
    
    // Função para iniciar o timer
    const startStopwatch = () => {
        setCountInterval(timer.clock());
        setAnimate(true);
    }

    useEffect(()=> {
        if(timeEnded){
            clearInterval(countInterval)
        }
    }, [timeCount]);

    return (
        <div>
            <button onClick={startStopwatch}>Start</button> <br />
            <div className="w-[100px] h-[100px] relative flex items-center justify-center">
                <SiStagetimer className={`size-[100px] absolute ${animate ? 'animate-spin' : ''}`}/>
                <p className={`absolute text-4xl font-bold ${animate ? 'animate-ping-slow' : ''}`}>{timeCount}</p>
            </div>
        </div>
    )
}

export default Stopwatch;