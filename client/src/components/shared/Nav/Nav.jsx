import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'


const Nav = (props) => {
  const { onChange, filter, setFilter } = props;

  function handleOnClick(category) {
    console.log(category);
    setFilter(category);
  }
  
  return (
    <nav>
      <div className='nav'>
        <NavLink className="logo" to='/'>KGB Adventures</NavLink>
        <div className="links">
          <select onChange={onChange} className="link" name="dropdown">
            <option value="" disable selection hidden>Shop Adventures</option>
            <option value="All">All</option>
            <option value="Beach">Beach</option>
            <option value="Country Side">Country Side</option>
            <option value="Culture and Heritage">Culture and Heritage</option>
            <option value="Desert">Desert</option>
            <option value="Famous Journeys">Famous Journeys</option>
            <option value="Forest">Forest</option>
            <option value="Mountain">Mountain</option>
            <option value="Other">Other</option>
          </select>
          <NavLink className="about-us link" to="/about-us">About Us</NavLink>
          <form className="search-link link">
            <i class="fa fa-search"></i>
            <input type="search" id="search" name="search" placeholder="Adventure Title" ></input>
          </form>
          <NavLink to="/adventures">
            <section className="search">
              <label for="search-input">
                <i className="fa fa-search"></i>
                <span className="sr-only">Search Adventures</span>
              </label>
              <input id="search-input" placeholder="Search Adventures"/>
            </section>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav;