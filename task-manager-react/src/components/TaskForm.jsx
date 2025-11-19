import {useState} from 'react'
import './TaskForm.css'

function TaskForm({onAddTask}) {
    const [inputValue, setInputValue] = useState("")
    const [inboxType, setInboxType] = useState("Today")

    function handleSubmit(event) {
        event.preventDefault()

        const trimmed = inputValue.trim()

        if (trimmed.length === 0) {
            return;
        }

        onAddTask(trimmed, inboxType)
        setInputValue("")
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <ul className="task-inbox-type">
                    <li>
                        <input type="radio" id="today" name="inbox-type" onChange={() => setInboxType("Today")} defaultChecked />
                        <label htmlFor="today">
                            Today
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="upcoming" name="inbox-type" onChange={() => setInboxType("Upcoming")} />
                        <label htmlFor="upcoming">
                            Upcoming
                        </label>
                    </li>
                </ul>
            </div>
            <button className="add-task-button" type="submit">Add</button>
        </form>
    )
}

export default TaskForm
