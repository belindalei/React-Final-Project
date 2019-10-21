// import React, { Fragment } from 'react'
import React from 'react'
import HeadContainer from './HeadContainer'
import TopContainer from './TopContainer'
import BottomContainer from './BottomContainer'
import SaveButton from '../components/SaveButton'

class MainContainer extends React.Component {
  //probably going to need to move all the counter and scroll button logic here and save the currently displayed top and bottom as keys in state which can be passed to the save button
  state = {
    topCounter: 0,
    bottomCounter: 0,
    displayTop: this.props.tops[0],
    displayBottom: this.props.bottoms[0]
  }

  //SaveButton will need to know which top/bottom is on display AND the user_id
  render(){
    return(
      <div className="main-container">
        <HeadContainer />
        <TopContainer tops={this.props.tops} />
        <BottomContainer bottoms={this.props.bottoms} />
        <SaveButton />
      </div>
    )
  }
}

export default MainContainer;