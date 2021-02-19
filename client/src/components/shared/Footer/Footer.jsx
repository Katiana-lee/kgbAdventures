// import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer(props) {
  const { user } = props;

  const authenticatedOptions = (
    <>
      <div><NavLink className="" to="/add-adventure">Add Adventure</NavLink></div>
      <br></br>  
      <div><NavLink className="" to="/sign-out">Sign Out</NavLink></div>
    </>
  )
  const unauthenticatedOptions = (
      <>
        <div><NavLink className="" to="/sign-up">Sign Up</NavLink></div>
        <br></br>
        <div><NavLink className="" to="/sign-in">Sign In</NavLink></div>
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
          <div className="foot-title-links">
            <p>Sign up for special offers!</p>
            <p>
              <input placeholder="email@example.com"></input>
              <NavLink to="/about-us"><div className="subscribe-button">SUBSCRIBE</div></NavLink>
            </p>
          </div>
        </div>
        <div className="foot-link get-connected">
          <div className="foot-title">GET CONNECTED</div>
          <div className="foot-title-links">
            <p>
              <a href="https://www.facebook.com"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
              <a href="https://www.twitter.com"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
              <a href="https://www.pinterest.com"><i class="fa fa-pinterest-p fa-2x" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer