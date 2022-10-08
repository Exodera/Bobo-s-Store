import React from 'react'
import GridItem from './GridItem';
import "./GridItem.css"

const GridItems = () => {
    const GridItems = [
        {
            Name: "Sasko Brown Bread",
            Price: "R16.00",
        },
        {
            Name: "Sasko white Bread",
            Price: "R17.00",
        },
        {
            Name: "Dragon Energy Drink",
            Price: "R10.00",
        },
        {
            Name: "Ozies",
            Price: "R1.99",
        },


    ];

  return (
    <div  className='item-container'>
        {
            GridItems.map((GridItemm)=>{
                return <GridItem props= {GridItemm}/>
            })
        }
    </div>
    
  )
}

export default GridItems