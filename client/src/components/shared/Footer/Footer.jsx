import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () =>
  <footer>
    <Link>
      <div>Get In Touch</div>
    </Link>
    <Link>
      <div>Resources</div>
    </Link>
    <Link>
      <div>Newsletter</div>
    </Link>
    <Link>
      <div>Get Connected</div>
    </Link>
  </footer>

export default Footer