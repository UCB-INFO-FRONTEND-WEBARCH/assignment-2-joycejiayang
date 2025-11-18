import {useState} from 'react'
import './App.css'
import TaskItem from './src/components/TaskItem.jsx'
import menuIcon from '../src/assets/menu_icon.png'
import searchIcon from '../src/assets/search_icon.png'
import checkIcon from '../src/assets/check_icon.png'
import inboxIcon from '../src/assets/inbox_icon.png'
import calendarIcon from '../src/assets/calendar_icon.png'
import upcomingIcon from '../src/assets/upcoming_icon.png'

function App() {
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
                    <input type="radio" id="nav-inbox" name="navs" defaultChecked />
                    <label className="nav-item-box" htmlFor="nav-inbox">
                        <img className="icon" alt="Inbox Icon" src={inboxIcon} />
                        <p>Inbox</p>
                        <span className="task-count">5</span>
                    </label>
                </li>

                <li className="hav-list-item">
                    <input type="radio" id="nav-today" name="navs" />
                    <label className="nav-item-box" htmlFor="nav-today">
                        <img className="icon" alt="Today Icon" src={calendarIcon} />
                        <p>Today</p>
                        <span className="task-count">5</span>
                    </label>
                </li>

                <li className="hav-list-item">
                    <input type="radio" id="nav-upcoming" name="navs" />
                    <label className="nav-item-box" htmlFor="nav-upcoming">
                        <img className="icon" alt="Upcoming Icon" src={upcomingIcon} />
                        <p>Upcoming</p>
                    </label>
                </li>
             </ul>
        </nav>

        {/* Task list display area */}
        <main className="main">
            <h1 id="inbox-header">Inbox</h1>
            <h2 id="today-header">Today</h2>
            <h2 id="upcoming-header">Upcoming</h2>

            {/* Use unordered lists for navigation and task items */}
            <ul className="task-list">
              <TaskItem />

                {/* <li className="task-list-item today">
                    <input type="checkbox" id="task1" name="tasks" />
                    <label className="task-description" htmlFor="task1">Call Mom</label>
                </li>
                <li className="task-list-item today">
                    <input type="checkbox" id="task2" name="tasks" />
                    <label className="task-description" htmlFor="task2">Buy the new issue of Scientific American</label>
                </li>
                <li className="task-list-item today">
                    <input type="checkbox" id="task3" name="tasks" />
                    <label className="task-description" htmlFor="task3">Return the textbook to Josie</label>
                </li>
                <li className="task-list-item today">
                    <input type="checkbox" id="task4" name="tasks" />
                    <label className="task-description" htmlFor="task4">Buy the new album by Rake</label>
                </li>
                <li className="task-list-item today">
                    <input type="checkbox" id="task5" name="tasks" />
                    <label className="task-description" htmlFor="task5">Buy a gift card for Dad</label>
                </li> */}
            </ul> 

            <em className="upcoming">No upcoming tasks after today!</em>
        </main>
    </>
  )
}

export default App
