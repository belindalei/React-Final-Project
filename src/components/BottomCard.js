import React from 'react'

const BottomCard = (props) => {
  let { img_url } = props.bottom

  return (
    <div className="container">
      {/*<h3>{props.name}</h3>*/}
      <img src={img_url} alt="" />
      {/*<h3>Color: {props.color}</h3>*/}
      {/*<h3>Type: {props.type}</h3>*/}
    </div>
  )



}

export default BottomCard;