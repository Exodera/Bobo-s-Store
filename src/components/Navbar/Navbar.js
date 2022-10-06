import {MdShoppingBasket} from 'react-icons/md'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import { useState, React } from 'react'



const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleOnClick = () =>{
        setIsMobile(!isMobile);
    }
  return (
    <nav>
        <div className='navbar'>
            <Link to = "/" className='logo'>Bobo's Store</Link>

            <div className={isMobile? "mobile-links": "links"}>
                <Link to = "/food" className='is-active'>Food</Link>
                <Link to = "/drinks">Drinks</Link>
                <Link to = "/callUs">Call Us</Link>
            </div>

            <div className="basket">
                <MdShoppingBasket color='red' className='bask-icon'/>
                <p>Basket</p>
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