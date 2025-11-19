import {useState} from 'react'
import './App.css'
import TaskItem from './components/TaskItem.jsx'
import TaskList from './components/TaskList.jsx'
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import checkIcon from './assets/check_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

function App() {
  const taskArray = [
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

  const [inboxType, setInboxType] = useState("Inbox")

  return (
    <>
      {/* Red navigation bar with search and menu functionality */}
      <header className="header">
        <input type="checkbox" id="menu-toggle" name="menu-toggle" defaultChecked />
        <label id="menu-label" htmlFor="menu-toggle">
          <img className="menu icon" alt="Menu Icon" src={menuIcon} />
        </label>
          
        <div className="search-bar">
            <img className="icon" alt="Search Icon" src={searchIcon} />
            <input type="text" placeholder="Quick Find" />
        </div>

        <div className="task-counter">
            <img className="icon" alt="Task Counter Icon" src={checkIcon} />
            <span>30/5</span>
        </div>
      </header>

      {/* Sidebar with task categories and counts */}
        <nav className="nav">
            {/* Use unordered lists for navigation and task items */}
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
            <TaskList taskArray={taskArray} inboxType={inboxType}/>
        </main>
    </>
  )
}

export default App
