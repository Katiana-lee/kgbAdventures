import React from 'react'
import './Nav.css'
import logoImage from "../../../images/tone4logo.png";
import logoName from "../../../images/wordplainlogo.png";
import { NavLink } from 'react-router-dom'


const Nav = (props) => {
  const { onChange, filter, setFilter } = props;

  function handleOnClick(category) {
    setFilter(category);
  }

  return (
    <nav>
      <div className='nav'>
        <NavLink className="nav-child" to="/">
          <div className="logo-container">
           
            <img className="nav-title" style={{ height: "25px"}} src={logoName} />
          </div>
        </NavLink>
        <select onChange={onChange} className="nav-child nav-dropdown link" name="dropdown">
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
        <NavLink className="inventory link" to="/inventory">Inventory</NavLink>
        <NavLink to="/shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink>
      </div>
    </nav>
  )
}

export default Nav;