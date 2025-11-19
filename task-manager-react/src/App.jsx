import {useState} from 'react'
import './App.css'
import TaskForm from './components/TaskForm.jsx'
import TaskCounter from './components/TaskCounter.jsx'
import TaskList from './components/TaskList.jsx'
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

function App() {
  const initialTaskArray = [
    {
      id: "task1",
      completed: false,
      text: "Call Mom",
      inboxType: "Today"
    },
    {
      id: "task2",
      completed: false,
      text: "Buy the new issue of Scientific American",
      inboxType: "Today"
    },
    {
      id: "task3",
      completed: false,
      text: "Return the textbook to Josie",
      inboxType: "Today"
    },
    {
      id: "task4",
      completed: false,
      text: "Buy the new album by Rake",
      inboxType: "Today"
    },
    {
      id: "task5",
      completed: false,
      text: "Buy a gift card for Dad",
      inboxType: "Upcoming"
    }
  ]

  const [taskArray, setTaskArray] = useState(initialTaskArray)
  const [inboxType, setInboxType] = useState("Inbox")
  const [filterType, setFilterType] = useState("All")
  const [numTotalTasks, setNumTotalTasks] = useState(initialTaskArray.length)
  const [numCompleted, setNumCompleted] = useState(initialTaskArray.filter(taskObject => taskObject.completed).length)
  const [objectiveTaskIndex, setObjectiveTaskIndex] = useState(6)

  function updateTaskCounter(numTotalTasks, numCompleted, newFilterType) {
    setNumTotalTasks(numTotalTasks)
    setNumCompleted(numCompleted)
    setFilterType(newFilterType)
  }

  function addNewTask(taskText) {
    const id = "task" + objectiveTaskIndex.toString()
    setObjectiveTaskIndex(objectiveTaskIndex + 1)

    const newTask = {
      id: id,
      completed: false,
      text: taskText,
      inboxType: "Today"
    }

    setTaskArray(prevArray => [...prevArray, newTask])
  }

  return (
    <>
      {/* Red navigation bar */}
      <header className="header">
        <input type="checkbox" id="menu-toggle" name="menu-toggle" defaultChecked />
        <label id="menu-label" htmlFor="menu-toggle">
          <img className="menu icon" alt="Menu Icon" src={menuIcon} />
        </label>
          
        <div className="search-bar">
            <img className="icon" alt="Search Icon" src={searchIcon} />
            <input type="text" placeholder="Quick Find" />
        </div>

        <TaskCounter numTotalTasks={numTotalTasks} numCompleted={numCompleted} filterType={filterType} inboxType={inboxType}/>
      </header>

      {/* Sidebar with task categories and counts */}
        <nav className="nav">
             <ul className="nav-list">
                <li className="hav-list-item">
                    <input type="radio" id="nav-inbox" name="navs" checked={inboxType === "Inbox"} onChange={() => setInboxType("Inbox")} />
                    <label className="nav-item-box" htmlFor="nav-inbox">
                        <img className="icon" alt="Inbox Icon" src={inboxIcon} />
                        <p>Inbox</p>
                        <span className="task-count">5</span>
                    </label>
                </li>

                <li className="hav-list-item">
                    <input type="radio" id="nav-today" name="navs" checked={inboxType === "Today"} onChange={() => setInboxType("Today")} />
                    <label className="nav-item-box" htmlFor="nav-today">
                        <img className="icon" alt="Today Icon" src={calendarIcon} />
                        <p>Today</p>
                        <span className="task-count">5</span>
                    </label>
                </li>

                <li className="hav-list-item">
                    <input type="radio" id="nav-upcoming" name="navs" checked={inboxType === "Upcoming"} onChange={() => setInboxType("Upcoming")} />
                    <label className="nav-item-box" htmlFor="nav-upcoming">
                        <img className="icon" alt="Upcoming Icon" src={upcomingIcon} />
                        <p>Upcoming</p>
                    </label>
                </li>
             </ul>
        </nav>

        {/* Task list display area */}
        <main className="main">
            <TaskForm onAddTask={addNewTask}/>
            <TaskList taskArray={taskArray} inboxType={inboxType} updateTaskCounter={updateTaskCounter} />
        </main>
    </>
  )
}

export default App
