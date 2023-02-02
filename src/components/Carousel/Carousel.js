import React, { useState, useEffect } from 'react';
import './car.css';
import per1 from '../../assets/UI-face-1.jpg'
import per2 from '../../assets/UI-face-2.jpg'
import per3 from '../../assets/UI-face-4.jpg'
function Carousel() {
    const [index, setIndex] = useState(0);
    const pages = [
      {
        image: <img src={per1} alt='2'/>,
        name:'Blalock Jolene',
        par:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!',
        title:'Go somewhere',
        pos:'CEO at Google',

      },
      {
        image:<img src={per2} alt='2'/>,
        name:'Amiel Barbara',
        par:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!',
        title:'Go somewhere',
        pos:'CEO at Google',
      },
      {
        image: <img src={per3} alt='2'/>,
        name:'Olivia Louis',
        par:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!',
        title:'Go somewhere',
        pos:'CEO at Google',
      }
    ];
    useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % pages.length);
        }, 2000);
    
        return () => clearInterval(intervalId);
      }, []);
      const styles = {
        container: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '480px',
          width: '400px',
          overflow: 'hidden'

        },
        page: {
          backgroundColor: '#fff',
          padding: '1rem',
          borderRadius: '0.5rem',
          height: '100%',
          width: '100%',
          transition: 'transform 0.5s ease-out'
        }
      };
  return (
    <div className='carousel section__padding'>
       <h1>What our Reader's Say about us</h1>
       <p>Lorem ipsum dolor sit amet</p>
       <div className='boxs'>
       <div style={styles.container} className='box'>
      <div style={styles.page}>
        {pages[0].image}
        <h1 className='title'>{pages[0].name}</h1>
        <p>{pages[0].par}</p>
        <h2>{pages[0].title}</h2>
        <h4>{pages[0].pos}</h4>
      </div>
    </div>
    <div style={styles.container} className='box'>
      <div style={styles.page}>
        {pages[index].image}
        <h1 className='title'>{pages[index].name}</h1>
        <p>{pages[index].par}</p>
        <h2>{pages[index].title}</h2>
        <h4>{pages[index].pos}</h4>
      </div>
    </div>
    <div style={styles.container} className='box'>
      <div style={styles.page}>
        {pages[2].image}
        <h1 className='title'>{pages[2].name}</h1>
        <p>{pages[2].par}</p>
        <h2>{pages[2].title}</h2>
        <h4>{pages[2].pos}</h4>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Carousel