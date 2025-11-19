import {useState} from 'react'
import './TaskItem.css'

function TaskItem({taskObject, onToggle, onDelete}) {
    return (
        <li className="task-item">
            <input 
                className="task-input"
                type="checkbox" 
                id={taskObject.id} 
                name="tasks" 
                checked={taskObject.completed}
                onChange={() => onToggle(taskObject.id)}/>
            <label 
                className="task-description" 
                htmlFor={taskObject.id}>{taskObject.text}
            </label>
            <button 
                className="delete-task-button" 
                onClick={() => onDelete(taskObject.id)}>Delete
            </button>
        </li>
    )
}

export default TaskItem
