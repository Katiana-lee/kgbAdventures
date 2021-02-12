import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer(props) {
  const { user } = props;

  const authenticatedOptions = (
    <>
        <NavLink className="link" to="/add-adventure">Add Adventure</NavLink>
        <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
  )
  const unauthenticatedOptions = (
      <>
          <NavLink className="link" to="/sign-up">Sign Up</NavLink>
          <NavLink className="link" to="/sign-in">Sign In</NavLink>
      </>
  )

  return (
    <div className="outer-footer">
      <footer>
        <div className="foot-link get-in-touch">
          <div className="foot-title">Get In Touch</div>
          <div className="foot-title-links intouch-links">
            <p>+8 800 200 23 16<br></br>vlad@kgb.org</p>
            <p>KGB Headquarters<br></br>Kremlin Office #123<br></br>Moscow, Russia</p>
          </div>
        </div>
        <div className="foot-link resources">
          <div className="foot-title">Resources</div>
          <div className="foot-title-links">
            <p>
              {user && <div className="link welcome">Welcome, {user.username}</div>}
              {user ? authenticatedOptions : unauthenticatedOptions}
            </p>
          </div>
        </div>
        <div className="foot-link newsletter">
          <div className="foot-title">Newsletter</div>
          <div className="foot-title-links"></div>
        </div>
        <div className="foot-link get-connected">
          <div className="foot-title">Get Connected</div>
          <div className="foot-title-links"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer