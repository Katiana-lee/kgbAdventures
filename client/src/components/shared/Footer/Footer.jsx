import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer(props) {
  const { user } = props;

  const authenticatedOptions = (
    <>
      <NavLink className="" to="/add-adventure">Add Adventure</NavLink>
      <br></br>  
      <NavLink className="" to="/sign-out">Sign Out</NavLink>
    </>
  )
  const unauthenticatedOptions = (
      <>
        <NavLink className="" to="/sign-up">Sign Up</NavLink>
        <br></br>
        <NavLink className="" to="/sign-in">Sign In</NavLink>
      </>
  )

  return (
    <div className="outer-footer">
      <footer>
        <div className="foot-link get-in-touch">
          <div className="foot-title">GET IN TOUCH</div>
          <div className="foot-title-links intouch-links">
            <p>+8 800 200 23 16<br></br>vlad@kgb.org</p>
            <p>KGB Headquarters<br></br>Kremlin Office #123<br></br>Moscow, Russia</p>
          </div>
        </div>
        <div className="foot-link resources">
          <div className="foot-title">RESOURCES</div>
          <div className="foot-title-links resources-links">
            <p>
              {user ? authenticatedOptions : unauthenticatedOptions}
            </p>
          </div>
        </div>
        <div className="foot-link newsletter">
          <div className="foot-title">NEWSLETTER</div>
          <div className="foot-title-links"></div>
        </div>
        <div className="foot-link get-connected">
          <div className="foot-title">GET CONNECTED</div>
          <div className="foot-title-links"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer