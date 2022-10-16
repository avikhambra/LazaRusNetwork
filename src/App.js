import './App.css';
import MidBody from './components/MidBody';
import Navbar from './components/Navbar';
import Products from './components/Products'
import Testimonial from './components/Testimonial';
import Footer from './Footer';

function App() {
  return (
    <>

      <div className='navbar'>
        <Navbar/>
        <MidBody/>
        <Products/>
        <Testimonial/>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
