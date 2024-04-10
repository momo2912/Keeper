import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { formatTime } from '../helpers/formatTime';
import { addWorkedTime } from '../redux/features/timerSlice';
import { toast } from 'react-toastify';
import { saveWorkedTimeToDb } from '../redux/api/saveTimerApiSlice';


const Timer = () => {
    const dispatch = useDispatch();
    const [countDownStart, setCountDownStart] = useState(false);
    const [workedTime, setWorkedTime] = useState(0);
    const [timeCountdown, setTimeCountdown] = useState(600);
    const [isCountDown, setIsCountDown] = useState(false);
    const timeOptions = [
        "10",
        "15",
        "20",
        "25",
        "30",
        "45",
        "60"
    ];
    const timeOptionsRef = useRef();

    const reset = () => {
        setTimeCountdown(600);
        setWorkedTime(0);
        setCountDownStart(false);
        setIsCountDown(false);
        timeOptionsRef.current.value = "10"
        toast.success("Timer reset")
    }

    useEffect(() => {
        let interval = null;
        if (countDownStart && timeCountdown > 0) {
            interval = setInterval(() => {
                setTimeCountdown(timeCountdown => timeCountdown - 1);
                setWorkedTime(workedTime => workedTime + 1);
                
            }, 1000);
        } else {
            clearInterval(interval);
            setCountDownStart(false);
            setWorkedTime(0);
            setIsCountDown(false);
            dispatch(addWorkedTime(workedTime));
            saveWorkedTimeToDb((workedTime));
        }
        return () => clearInterval(interval);
    }, [countDownStart, timeCountdown]);

    const handleChange = (e) => {
        let timeRange = Number(e.target.value);
        setTimeCountdown(timeRange * 60);
    }
    const toggleStartStop = () => {
        setIsCountDown(true);
        setCountDownStart(countDownStart => !countDownStart);
    }
    return (
        <div className='timer-container'>
            <div className='timer-header'>
                <h1>Countdown Timer</h1>
            </div>
            <div className='timer-main'>
                <div className='timer-details'>
                    <h2>Countdown</h2>
                    <h2>{formatTime(timeCountdown)}</h2>
                </div>

                {!isCountDown && <div className='timer-details'>
                    <h2>Work session range</h2>
                    <select className='timer-select' ref={timeOptionsRef} onChange={handleChange}>
                        {timeOptions.map((option, index) => (
                            <option key={index} value={option} >
                                {Number(option) < 60 ? `${option} minutes` : `${option / 60} hours`}
                            </option>
                        ))}
                    </select>
                </div>}
            </div>

            <button className={!countDownStart ? 'start-timer-btn' : 'start-timer-btn stopped'} onClick={toggleStartStop}>
                {!countDownStart ? 'Start' : 'Stop'}
            </button>
            <button className='reset-timer-btn' onClick={reset}>Reset</button>

        </div >
    )
}

export default Timer
