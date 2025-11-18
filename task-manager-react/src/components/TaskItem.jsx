import {useState} from 'react'
import './TaskItem.css'

function TaskItem({task}) {
    return (
        <li className="task-item today">
            <input 
                type="checkbox" 
                id={task.id} 
                name="tasks" 
                checked={task.completed}/>
            <label className="task-description" htmlFor={task.id}>{task.text}</label>
        </li>
    )
}

export default TaskItem
