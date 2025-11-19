import {useState, useEffect} from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'

function TaskList({taskArray, inboxType, updateTaskCounter, toggleTask}) {
    const tasks = taskArray
    const [filterType, setFilterType] = useState("All")

    useEffect(() => {
        const thisInboxTasks = filterThisInbox(inboxType)
        const numTotalTasks = thisInboxTasks.length;
        const numCompleted = thisInboxTasks.filter(taskObject => taskObject.completed).length

        updateTaskCounter(numTotalTasks, numCompleted, filterType)
    }, [tasks, inboxType, filterType])

    function deleteTask(id) {
        setTasks(prevTasks =>
            prevTasks.filter(taskObject => taskObject.id !== id)
        )
    }

    function filterThisInbox(inboxType) {
        return tasks.filter(taskObject => {
            if (inboxType === "Inbox") {
                return true;
            }
            return taskObject.inboxType === inboxType
        })
    }

    return (
        <>
            <h1 className="task-list-header">{inboxType}</h1>

            <ul className="task-filters">
                <li>
                    <input type="radio" id="task-filter-all" name="filters" onChange={() => setFilterType("All")} defaultChecked />
                    <label className="task-filter-item" htmlFor="task-filter-all">
                        All
                    </label>
                </li>
                <li>
                    <input type="radio" id="task-filter-active" name="filters" onChange={() => setFilterType("Active")} />
                    <label className="task-filter-item" htmlFor="task-filter-active">
                        Active
                    </label>
                </li>
                <li>
                    <input type="radio" id="task-filter-completed" name="filters" onChange={() => setFilterType("Completed")} />
                    <label className="task-filter-item" htmlFor="task-filter-completed">
                        Completed
                    </label>
                </li>
            </ul>

            {/* Step 1: Filter by inbox type 
            Step 2: Filter by filter type 
            Step 3: Map onto TaskItems */}
            <ul className="task-list">
                {tasks.filter(taskObject => {
                    if (inboxType === "Inbox") {
                        return true;
                    }
                    return taskObject.inboxType === inboxType;
                }).filter(taskObject => {
                    if (filterType === "Active") {
                        return !taskObject.completed;
                    } else if (filterType === "Completed") {
                        return taskObject.completed
                    } else {
                        return true;
                    }
                }).map(taskObject => 
                    <TaskItem 
                        key={taskObject.id} 
                        taskObject={taskObject} 
                        onToggle={toggleTask}
                        onDelete={deleteTask}/>
                )}
            </ul>
        </>
    )
}

export default TaskList
