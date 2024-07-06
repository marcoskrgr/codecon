import { useState, useCallback } from "react";
import StopwatchImage from "./StopwatchImage.jsx";

export function Stopwatch () {
    const [ secCount, setSecCount ] = useState(55);
    const [ minuteCount, setMinuteCount ] = useState(1);
    const [ countInterval, setCountInterval] = useState();
    const [ animate, setAnimate] = useState(false);

    const timer = {
        clock: () => setInterval(increaseCount, 1000)
    }

    const increaseCount = useCallback(() => {
        setSecCount(prev =>  {
            let newSecCount = prev + 1;
            if (newSecCount === 60) {
                setMinuteCount(prev => prev+1);
                return 0;
            }
            return newSecCount;
        });
    }, [setSecCount, setMinuteCount])
    
    // Função para iniciar o timer
    const startStopwatch = () => {
        setCountInterval(timer.clock());
        setAnimate(true);
    }

    // Função para parar o timer
    const stopStopwatch = () => {
        clearInterval(countInterval)
        setAnimate(false);
    }

    return (
        <div>
            <button onClick={startStopwatch}>Start</button> <br />
            <div className={`w-[110px] h-[110px] relative flex items-center justify-center ${animate && 'animate-wobble'}`}>
                <StopwatchImage
                    className={'w-[110px] h-[110px]'}
                    colorClass={
                        minuteCount < 2 && 'fill-green-700'
                        ||
                        minuteCount < 4 && 'fill-amber-300'
                        ||
                        'fill-red-500'
                    }
                />
                <p className={`absolute text-2xl font-bold duration-500
                    ${
                        minuteCount < 2 && 'text-green-700'
                        ||
                        minuteCount < 4 && 'text-amber-300'
                        ||
                        'text-red-500'
                    }
                `}>
                    {
                        (minuteCount > 9 ? minuteCount : '0' + minuteCount)
                        + ":" +
                        (secCount > 9 ? secCount : '0' + secCount)
                    }
                </p>
            </div>
            <button onClick={stopStopwatch}>Stop</button> <br />
        </div>
    )
}

export default Stopwatch;