import React from 'react'
import ScrollButtonRight from './ScrollButtonRight'
import ScrollButtonLeft from './ScrollButtonLeft'
import TopCard from './TopCard'
import BottomCard from './BottomCard'

const OutfitCard = (props) => {
  //need to take the outfits from props, map over them and return tops and bottoms, then set displayTop and Bottom like in the other components
  
  return(
    <>
      <div className="top-belt"><TopCard top={props.top}/></div>
      
      <ScrollButtonLeft handleClick={props.scrollLeft}/>
      <BottomCard bottom={props.bottom} />
      <ScrollButtonRight handleClick={props.scrollRight}/>
    </>
  )



}

export default OutfitCard;