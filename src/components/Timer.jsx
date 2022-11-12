import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatTime } from '../helpers/formatTime';
import { addWorkedTime } from '../redux/features/timerSlice';
import { toast } from 'react-toastify';


const Timer = () => {
    const dispatch = useDispatch();
    const [countDownStart, setCountDownStart] = useState(false);
    const [workedTime, setWorkedTime] = useState(0);
    const [timeCountdown, setTimeCountdown] = useState(600)

    const reset = () => {
        setTimeCountdown(600);
        setWorkedTime(0);
        setCountDownStart(false);
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
            dispatch(addWorkedTime(workedTime));
        }
        return () => clearInterval(interval);
    }, [countDownStart, timeCountdown]);

    const handleChange = (e) => {
        const sessionTime = Number(e.target.value)
        if (sessionTime < 10) {
            setTimeCountdown(sessionTime * 3600);
        }
        else {
            setTimeCountdown(sessionTime * 60);
        }
    }
    const toggleStartStop = () => {
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

                <div className='timer-details'>
                    <h2>Work session range</h2>
                    <select className='timer-select' onChange={handleChange}>
                        <option value="10" >10 minutes</option>
                        <option value="15">15 minutes</option>
                        <option value="20">20 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="45">45 minutes</option>
                        <option value="1">01 hour</option>
                    </select>
                </div>
            </div>

            <button className={!countDownStart ? 'start-timer-btn' : 'start-timer-btn stopped'} onClick={toggleStartStop}>
                {!countDownStart ? 'Start' : 'Stop'}
            </button>
            <button className='reset-timer-btn' onClick={reset}>Reset</button>

        </div>
    )
}

export default Timer
