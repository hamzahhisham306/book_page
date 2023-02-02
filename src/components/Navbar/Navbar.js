import React from 'react'
import './Nav.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <div className='navbar section__padding'>
      <div className='logo'>
         <img src={logo} alt='logo'/>
      </div>
      <div className='list-nav'>
       <ul>
       <li>Home</li>
       <li>Course</li>
       <li>price</li>
       <li>pages</li>
       <li>fact</li>
       <li>About</li>
       </ul>
      </div>

    </div>
  )
}

export default Navbar