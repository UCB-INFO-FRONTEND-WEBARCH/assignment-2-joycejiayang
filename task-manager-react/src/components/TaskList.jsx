import {useState} from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'

function TaskList({taskList}) {
    return (
        <>
            <h1 className="task-list-header">Inbox</h1>

            <ul className="task-list">
                <TaskItem id="id1" completed={true} taskText={"Call Mom"}/>
            </ul>
        </>
    )
}

export default TaskList
