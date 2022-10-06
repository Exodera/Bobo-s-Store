import React from 'react'
import GridItem from './GridItem';

const GridItems = () => {
    const GridItems = [
        {
            Name: "Bread",
            Price: "R5.00",

        }
    ];

  return (
    <div>
        {
            GridItems.map((GridItemm)=>{
                return <GridItem props= {GridItemm}/>
            })
        }
    </div>
    
  )
}

export default GridItems