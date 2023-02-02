import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer section__padding'>
      <div className='about'>
       <h2>About us</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum maxime ea similique illum corrupti</p>
       <div className='text'>
        <p>Copyright ©2019 All rights reserved | This template is made with by </p>
        <h3>Hamzah Alqrbawe</h3>
       </div>
      </div>
      <div className='news'>
       <h2>Newsletter</h2>
       <p>Stay Updated</p>
       <input placeholder='Email' type='email'/>
       <button>Send</button>
      </div>
      <div className='follow'>
       <h2>Follow Us</h2>
       <p>Let us be social</p>
      </div>
    </div>
  )
}

export default Footer