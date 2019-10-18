import React from 'react'
import BottomContainer from './BottomContainer'
import HeadContainer from './HeadContainer'
import TopContainer from './TopContainer'
import SaveButton from '../components/SaveButton'

class MainContainer extends React.Component {

  state = {
    tops: [],
    bottoms: []
  }

  componentDidMount(){
    this.fetchTops()
    this.fetchBottoms()
  }

  fetchTops = () => {
    fetch("http://localhost:3000/tops")
      .then(resp => resp.json())
      .then(data => this.setState({tops: data}))
  }

  fetchBottoms = () => {
    fetch("http://localhost:3000/bottoms")
      .then(resp => resp.json())
      .then(data => this.setState({bottoms: data}))
  }


  render(){
    return(
      
        <div className="main-container">
          <HeadContainer />
          <TopContainer tops={this.state.tops} />
          <BottomContainer />
          <SaveButton />
        </div>
    
    )
  }
}

export default MainContainer;