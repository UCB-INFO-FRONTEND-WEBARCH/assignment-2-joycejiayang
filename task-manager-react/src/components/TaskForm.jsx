import {useState} from 'react'
import './TaskForm.css'

function TaskForm({onAddTask}) {
    const [inputValue, setInputValue] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        const trimmed = inputValue.trim()

        if (trimmed.length === 0) {
            return;
        }

        onAddTask(trimmed)
        setInputValue("")
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="add-task-button" type="submit">Add</button>
        </form>
    )
}

export default TaskForm
