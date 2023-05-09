import React from 'react'
import { SiInteractiondesignfoundation } from "react-icons/si";
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";



function Header() {
  return (
    <header>
    <div className='page'>
      <div className='logo'>
    <a className='stl' href='https://www.interaction-design.org/' target='_design'
    ><SiInteractiondesignfoundation  />
    </a>
      </div>
      <div className='navbar'>
        <p>home</p>
        <p>about</p>
        <p>projects</p>
        <p>videos</p>
        <p>contact</p>
      </div>
      <button>Login</button>
    
    <div className='hamburger'>
    <a href=''>
    <GiHamburgerMenu />
    </a>
    </div>
    </div>
    {/* <div className='content'>
    <h3>Welcome to</h3>
    <h2>INTERACTION DESIGN</h2>
    <h1>FOUNDATION</h1>
    </div> */}
    </header>
  )
}

export default Header
