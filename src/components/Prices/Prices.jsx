import React from 'react';
import './price.css';
function Prices() {
  return (
    <div className='prices section__padding'>
        <h1>Purcase Whatever You Want</h1>
        <p>Lorem , ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='purchase'>
          <div className='box'>
            <h2>PDF</h2>
            <p>With supporting text below as a natural lead-in</p>
            <div className='shape'>
                <h1>$77.99</h1>
                <button>Purchase Now</button>
            </div>  
          </div>
          <div className='box'>
            <h2>PDF</h2>
            <p>With supporting text below as a natural lead-in</p>
            <div className='shape'>
                <h1>$77.99</h1>
                <button>Purchase Now</button>
            </div>
            
          </div>
          <div className='box'>
            <h2>PDF</h2>
            <p>With supporting text below as a natural lead-in</p>
            <div className='shape'>
                <h1>$77.99</h1>
                <button>Purchase Now</button>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Prices