import {useState} from 'react'
import './TaskItem.css'

function TaskItem({taskObject, onToggle}) {
    return (
        <li className="task-item today">
            <input 
                type="checkbox" 
                id={taskObject.id} 
                name="tasks" 
                checked={taskObject.completed}
                onChange={() => onToggle(taskObject.id)}/>
            <label 
                className="task-description" 
                htmlFor={taskObject.id}
            >
                {taskObject.text}
            </label>
        </li>
    )
}

export default TaskItem
