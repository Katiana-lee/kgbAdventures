import React from 'react'
import "./Layout.css"
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <div className='layout'>
      <Nav onChange={props.onChange} user={props.user}/>
      <div className='layout-children'>
        {props.children}
      </div>
      <Footer user={props.user}/>
    </div>
  );
}

export default Layout