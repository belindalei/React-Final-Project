import React from 'react'
import ScrollButtonRight from './ScrollButtonRight'

const OutfitCard = (props) => {
  //need to take the outfits from props, map over them and return tops and bottoms, then set displayTop and Bottom like in the other components
  
  return(
    <>
      <TopCard />
      <ScrollButtonLeft />
      <BottomCard />
      <ScrollButtonRight />
    </>
  )



}

export default TopCard;