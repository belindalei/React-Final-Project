import React from 'react'

const TopCard = (props) => {
  
  let { img_url, name, color } = props.top
  return(
    <div className="top">
    {/* <h3>{props.name}</h3> */}
    <img src={img_url} alt="" />
    {/* <h3>Color: {props.color}</h3>
    <h3>Type: {props.type}</h3> */}
    </div>
  )



}

export default TopCard;