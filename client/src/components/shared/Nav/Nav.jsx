import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
  return (
    <nav>
      <div className='nav'>
        <NavLink className="logo" to='/'>KGB Adventures</NavLink>
        <div className="links">
          <select name = "dropdown">
            <option value="beaches">Beach</option>
            <option value="countrySide">Country Side</option>
            <option value="cultureHeritage">Cultural Heritage Centers</option>
            <option value="desert">Desert</option>
            <option value="famousJourney">Famous Journeys</option>
            <option value="forest">Forest</option>
            <option value="mountains">Mountain</option>
            <option value="other">Other</option>
          </select>
          <NavLink className="about-us" to="/aboutUs">About Us</NavLink>
          <form className="search-link">
            <i class="fa fa-search"></i>
            <input type="search" id="search" name="search" placeholder="Adventure Title"></input>
          </form>
        </div>

      </div>
    </nav>
  )
}

export default Nav;