import './App.css';
import Carousel from './components/Carousel/Carousel';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Platform from './components/Platform/Platform';
import Prices from './components/Prices/Prices';

function App() {
  return (
    <div>
    <div className='app' >
     <Navbar/>
     <Header/>
    </div>
     <Main/>
     <Features/>
     <Prices/>
     <Platform/>
     <Carousel/>
     <Footer/>
    </div>
  );
}

export default App;
