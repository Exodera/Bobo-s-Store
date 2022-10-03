import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"



const Navbar = () => {

    const handleOnClick = () =>{

        const hamburger = document.querySelector('.hamburger');
        hamburger.addEventListener('click', ()=>{
            this.classList.toggle("is-active");
        })
       

    }
  return (
    <nav>
        <div className='navbar'>
            <span className='logo'>Bobo's Store</span>

            <div className='links'>
                <Link to = "/food" className='is-active'> Food</Link>
                <Link to = "/drinks">Drinks</Link>
                <Link to = "/callUs">Call Us</Link>
            </div>

            <button className='hamburger' onClick={handleOnClick}> 
            <span></span>
            <span></span>
            <span></span>
            </button>

        </div>
    </nav>
  )
}

export default Navbar