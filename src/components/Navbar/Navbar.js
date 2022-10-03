import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Bobo's Store</span>
        <div className='links'>
            <Link to = "#">Food</Link>
            <Link to = "#">Drinks</Link>
            


        </div>

    </div>
  )
}

export default Navbar