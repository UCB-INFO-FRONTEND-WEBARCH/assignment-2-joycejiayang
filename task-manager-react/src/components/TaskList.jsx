import {useState} from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'

function TaskList({taskArray}) {
    return (
        <>
            <h1 className="task-list-header">Inbox</h1>

            {/* Use unordered lists for navigation and task items */}
            <ul className="task-list">
                {taskArray.map(task => <TaskItem key={task.id} task={task}/>)}
            </ul>
        </>
    )
}

export default TaskList
