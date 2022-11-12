import React from 'react';
import { formatTime } from '../helpers/formatTime';
import { useSelector } from "react-redux";


const Stats = () => {
  const finishedTask = useSelector((state) => state.task.finishedTask)
  const workedTime = useSelector((state) => state.timer.totalWorkTime)
  return (
    <div className='stats-container'>
      <div className='stats-header'>
        <h1>Statistics</h1>
      </div>
      <div className='stats-main'>
        <div className='stats-details'>
          <h2>Finshied Tasks : {finishedTask?.length}</h2>
          <h2>Total Worked Time : {formatTime(workedTime || 0)}</h2>
        </div>
      </div>
    </div>
  )
}

export default Stats
