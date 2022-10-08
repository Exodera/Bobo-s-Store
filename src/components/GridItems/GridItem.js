import React from 'react'
import "./GridItem.css"


const GridItem = ({props}) => {
  return (
    <div>
      <div className='item'>
        <img classname = "item-image" src='' alt = "item icon"/>
        <h4 className = "item-name">{props.Name}</h4>
        <h3 className = "item-price">{props.Price}</h3>
        

      </div>
    </div>
  )
}

export default GridItem