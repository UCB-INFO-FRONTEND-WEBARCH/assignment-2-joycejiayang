import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <input type="checkbox" id="menu-toggle" name="menu-toggle" checked>
        {/* <label id="menu-label" for="menu-toggle">
          <img className="menu icon" alt="Menu Icon" src="assets/menu_icon.png">
        </label> */}
          
        {/* <div className="search-bar">
            <img class="icon" alt="Search Icon" src="assets/search_icon.png">
            <input type="text" placeholder="Quick Find">
        </div>

        <div className="task-counter">
            <img className="icon" alt="Task Counter Icon" src="assets/check_icon.png">
            <span>30/5</span>
        </div> */}
      </header>
    </>
  )
}

export default App
