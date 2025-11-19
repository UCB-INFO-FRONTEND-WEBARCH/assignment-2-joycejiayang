import {useState} from 'react'
import checkIcon from '../assets/check_icon.png'

function TaskCounter({numTotalTasks, numCompleted, filterType}) {
    function displayText() {
        if (filterType === "All") {
            return <span>{numTotalTasks} of {numTotalTasks} tasks</span>
        } else if (filterType === "Active") {
            return <span>{numTotalTasks - numCompleted} of {numTotalTasks} tasks</span>
        } else {
            return <span>{numCompleted} of {numTotalTasks} tasks</span>
        }
    }

    return (
        <div className="task-counter">
            <img className="icon" alt="Task Counter Icon" src={checkIcon} />
            {displayText()}
        </div>
    )
}

export default TaskCounter
