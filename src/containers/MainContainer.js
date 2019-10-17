import React from 'react'
import BottomContainer from './BottomContainer'
import HeadContainer from './HeadContainer'
import TopContainer from './TopContainer'
import SaveButton from '../components/SaveButton'

class MainContainer extends React.Component {


  render(){
    return(
      <div>
      <TopContainer tops={this.props.tops} />
      <BottomContainer bottoms={this.props.bottoms} />
      </div>
    )
  }
}

export default MainContainer;