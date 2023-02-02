import React from 'react'
import './featuers.css';
function Features() {
  return (
    <div className='features'>
     <div className='featuers__main section__padding'>
      <h1>Some Features Tat Made Us Unique</h1>
      <p>Lorem isum dolor sit amet consectetur adipisicing elit. Vite, enum?</p>
     </div>
     <div className='cards section__padding'>
     <div className='card'>
          <h1>2345</h1>
          <p>Happy Client</p>
        </div>
        <div className='card'>
          <h1>6784</h1>
          <p>Happy Client</p>
        </div>
        <div className='card'>
          <h1>1056</h1>
          <p>Happy Client</p>
        </div>
        <div className='card'>
          <h1>9152</h1>
          <p>Happy Client</p>
        </div>
     </div>
    </div>
  )
}

export default Features