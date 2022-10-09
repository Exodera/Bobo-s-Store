import React from 'react'
import GridItems from '../components/GridItems/GridItems'
import "./Global.css"

const Home = () => {
  return (
    <div>
      <h2>Ongoing Specials</h2>
      <GridItems/>
      <h2>Food Items</h2>
      <GridItems/>
      <h2>Drinks</h2>
      <GridItems/>


    </div>
  )
}

export default Home