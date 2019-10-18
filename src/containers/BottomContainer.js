import React from 'react'
import BottomCard from '../components/BottomCard'

const BottomContainer = (props) => {

  const renderBottoms = () => {
    return props.bottoms.map(bottom => {
      return 
        <BottomCard
          key={bottom.id}
          id={bottom.id}
          bottom={bottom}
          color={bottom.color}
          type={bottom.type}
          name={bottom.name}
          img={bottom.img_url} 
        />
    })
  }

  return (
    <div className="bottom-belt">
      {renderBottoms()}
    </div>
  )

}

export default BottomContainer;
