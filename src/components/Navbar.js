import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='main-nav'>
           
            {/* left part Navbar --------> */}
            <div className='logo'>
                <img src="https://lazarus.network/assets/img/logo.png" alt="error" width={'170px'} />
            </div>
            
            {/* mid or menu part Navbar */}
            <div className='menu-link'>
                
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">News</a>
                <a href="#">About</a>
                
            </div>

        </nav>


    </>
  )
}

export default Navbar
