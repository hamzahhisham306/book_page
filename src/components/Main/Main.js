import React from 'react'
import shoes from '../../assets/pexels-photo-1904769.jpeg';
import './main.css';
function Main() {
  return (
    <div className='main section__padding'>
     <div className='image'>
        <img src={shoes} alt='shoes' />
     </div>
     <div className='shoes_text'>
     <h1>Mr. Devid Smith</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere iure adipisci harum ducimus accusantium, repudiandae aperiam voluptatum, id ex ratione omnis reiciendis possimus officiis.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae, tenetur quidem eum aliquid vel labore sint placeat ad deserunt consectetur fugit ullam. Eius unde neque ducimus obcaecati ipsum quos vero totam recusandae hic expedita nemo sit, illum harum. Quisquam impedit ullam itaque facere et ad molestiae quod reprehenderit excepturi!</p>
     </div>
    </div>
  )
}

export default Main