import React from 'react'
import BottomContainer from './BottomContainer'
import HeadContainer from './HeadContainer'
import TopContainer from './TopContainer'
import SaveButton from '../components/SaveButton'

class MainContainer extends React.Component {


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