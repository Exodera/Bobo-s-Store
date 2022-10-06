import React from 'react'

const GridItem = ({props}) => {
  return (
    <div>
      <div className='item'>
        <h3 className = "item-price">{props.Price}</h3>
        <h3 className = "item-name">{props.Name}</h3>

      </div>
    </div>
  )
}

export default GridItem