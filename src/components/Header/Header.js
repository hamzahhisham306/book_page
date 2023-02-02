import React from 'react'
import './header.css';
import book from '../../assets/header-img.png'
function Header() {
  return (
    <div className='header section__padding'>
       <div className='header-text'>
        <h3>AUTHOR: DAILY TUTION</h3>
        <h1>EECITING ADEVEURE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus eum dignissimos ipsa sequi expedita.</p>
        <button>By now for $5.99</button>
       </div>
       <div className='book_image'>
       <img src={book} alt='book'/>
       </div>
    </div>
  )
}

export default Header