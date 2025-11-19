import checkIcon from '../assets/check_icon.png'
import './TaskCounter.css'

function TaskCounter({numTotalTasks, numCompleted, filterType}) {
    function displayText() {
        if (filterType === "All") {
            return <span>Showing {numTotalTasks} of {numTotalTasks} tasks</span>
        } else if (filterType === "Active") {
            return <span>Showing {numTotalTasks - numCompleted} of {numTotalTasks} tasks</span>
        } else {
            return <span>Showing {numCompleted} of {numTotalTasks} tasks</span>
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
