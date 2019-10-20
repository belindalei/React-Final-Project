import React from 'react'
import TopCard from '../components/TopCard' 

const TopContainer = (props) => {

  //write method to only show one top at a time and buttons to move through them

  const renderTops = () => {
    return props.tops.map(top => {
      return <TopCard 
      key={top.id} 
      id={top.id} 
      top={top}
      color={top.color}
      category={top.category}
      name={top.name}
      img={top.img_url}  />
    })
  }

  return(
    <div className="top-belt">
      {/* <h1>Top Container</h1> */}
      {renderTops()}
  </div>
  )



}

export default TopContainer;