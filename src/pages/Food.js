import React from 'react'
import GridItems from '../components/GridItems/GridItems'

const Food = () => {
  return (
    <div>
      <h2>Food items on Sale!</h2>
      <GridItems/>
      <h2>Food items in stock</h2>
      <GridItems/>

    </div>
  )
}

export default Food