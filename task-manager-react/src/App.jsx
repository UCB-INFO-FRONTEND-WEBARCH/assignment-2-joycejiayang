import {useState} from 'react'
import './App.css'
import menuIcon from '../src/assets/menu_icon.png'
import searchIcon from '../src/assets/search_icon.png'
import checkIcon from '../src/assets/check_icon.png'

function App() {
  return (
    <>
      <header className="header">
        <input type="checkbox" id="menu-toggle" name="menu-toggle" checked />
        <label id="menu-label" for="menu-toggle">
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
    </>
  )
}

export default App
