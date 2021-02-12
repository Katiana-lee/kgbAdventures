import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () =>
  <div className="outer-footer">
    <footer>
      <div className="foot-link get-in-touch">
        <div className="foot-title">Get In Touch</div>
      </div>
      <div className="foot-link resources">
        <div className="foot-title">Resources</div>
      </div>
      <div className="foot-link newsletter">
        <div className="foot-title">Newsletter</div>
      </div>
      <div className="foot-link get-connected">
        <div className="foot-title">Get Connected</div>
      </div>
    </footer>
  </div>

export default Footer