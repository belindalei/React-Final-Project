import React from 'react'
import TopCard from '../components/TopCard' 

const TopContainer = (props) => {

  const renderTops = () => {
    return props.tops.map(top => {
      return <TopCard 
      key={top.id} 
      id={top.id} 
      top={top}
      color={top.color}
      type={top.type}
      name={top.name}
      img={top.img_url}  />
    })
  }

  return(
    <div>
      {renderTops()}
    </div>
  )



}

export default TopContainer;