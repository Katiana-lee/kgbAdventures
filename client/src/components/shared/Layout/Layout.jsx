import React from 'react'
import "./Layout.css"
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  console.log(props)
  return (
    <div className='layout'>
      <Nav onChange={props.onChange} />
      <div className='layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout