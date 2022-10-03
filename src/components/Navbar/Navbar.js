import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Bobo's Store</span>
        <div className='links'>
            <Link to = "/food">Food</Link>
            <Link to = "/drinks">Drinks</Link>
            <Link to = "/callUs">Call Us</Link>
        </div>

    </div>
  )
}

export default Navbar