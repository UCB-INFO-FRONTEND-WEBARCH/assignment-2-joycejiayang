import {useState} from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'

function TaskList({taskArray}) {
    const [tasks, setTasks] = useState(taskArray)

    function handleToggle(id) {
        setTasks(prevTasks =>
            prevTasks.map(taskObject =>
                taskObject.id === id ? {...taskObject, completed: !taskObject.completed}
                : taskObject
            )
        )
    }

    return (
        <>
            <h1 className="task-list-header">Inbox</h1>

            {/* Use unordered lists for navigation and task items */}
            <ul className="task-list">
                {tasks.map(taskObject => 
                    <TaskItem key={taskObject.id} taskObject={taskObject} onToggle={handleToggle}/>
                )}
            </ul>
        </>
    )
}

export default TaskList
