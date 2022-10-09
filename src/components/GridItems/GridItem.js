import React from 'react'
import "./GridItem.css"
import picSaskoBrown from "../images/sasko-brown.jpg"
import {MdShoppingBasket} from 'react-icons/md'


const GridItem = ({props}) => {
  return (
    <div>
      <div className='item'>
        <img className = "item-image" src={picSaskoBrown} alt = "item icon"/>
        <div className='item-description'>
          <h4 className = "item-name">{props.Name}</h4>
          <div className='buy'>
            <h3 className = "item-price">{props.Price}</h3>
            <div className='add-item'>
              <p className='add-sign'>+</p>
              <MdShoppingBasket color='red'/>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default GridItem