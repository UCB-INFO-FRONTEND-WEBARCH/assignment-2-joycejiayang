import {useState} from 'react'
import './TaskItem.css'

function TaskItem({id, completed, taskText}) {
    return (
        <li className="task-item today">
            <input 
                type="checkbox" 
                id={id} 
                name="tasks" 
                checked={completed}/>
            <label className="task-description" htmlFor={id}>{taskText}</label>
        </li>
    )
}

export default TaskItem
