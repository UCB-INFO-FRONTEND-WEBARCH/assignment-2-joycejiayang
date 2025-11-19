import {useState} from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'

function TaskList({taskArray, inboxType}) {
    const [tasks, setTasks] = useState(taskArray)

    function handleToggle(id) {
        setTasks(prevTasks =>
            prevTasks.map(taskObject =>
                taskObject.id === id ? {...taskObject, completed: !taskObject.completed}
                : taskObject
            )
        )
    }

    function handleDelete(id) {
        setTasks(prevTasks =>
            prevTasks.filter(taskObject => taskObject.id !== id)
        )
    }

    return (
        <>
            <h1 className="task-list-header">{inboxType}</h1>

            {/* Use unordered lists for navigation and task items */}
            <ul className="task-list">
                {tasks.filter(taskObject => {
                    if (inboxType === "Inbox") {
                        return true;
                    }
                    return taskObject.inboxType === inboxType;
                }).map(taskObject => 
                    <TaskItem 
                        key={taskObject.id} 
                        taskObject={taskObject} 
                        onToggle={handleToggle}
                        onDelete={handleDelete}/>
                )}
            </ul>
        </>
    )
}

export default TaskList
