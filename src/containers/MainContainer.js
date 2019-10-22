// import React, { Fragment } from 'react'
import React from 'react'
import HeadContainer from './HeadContainer'
import TopContainer from './TopContainer'
import BottomContainer from './BottomContainer'
import SaveButton from '../components/SaveButton'
import NewOutfitForm from '../components/NewOutfitForm'

class MainContainer extends React.Component {
  state = {
    topCounter: 0,
    bottomCounter: 0,
    displayTop: {},
    displayBottom: {}
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let displayTopCopy = this.props.tops[0]
      let displayBottomCopy = this.props.bottoms[0]
      this.setState({
        displayTop: displayTopCopy,
        displayBottom: displayBottomCopy
      })
    }
  }


  //write method to only show one top at a time and buttons to move through them

  //fix bottom container too!!!

  scrollRightTop = () => { 
    let counterCopy = this.state.topCounter
    counterCopy +=1
    if (counterCopy >= this.props.tops.length)  {counterCopy = 0 }
    this.setState({
      topCounter: counterCopy,
      displayTop: this.props.tops[counterCopy]
    })
  }

  scrollLeftTop = () => {
    let counterCopy = this.state.topCounter
    counterCopy -=1
    if (counterCopy < 0)  {counterCopy = this.props.tops.length - 1 }
    this.setState({
      topCounter: counterCopy,
      displayTop: this.props.tops[counterCopy]
    })
  }

  scrollRightBottom = () => { 
    let counterCopy = this.state.bottomCounter
    counterCopy +=1
    if (counterCopy >= this.props.tops.length)  {counterCopy = 0 }
    this.setState({
      bottomCounter: counterCopy,
      displayBottom: this.props.bottoms[counterCopy]
    })
  }

  scrollLeftBottom= () => {
    let counterCopy = this.state.bottomCounter
    counterCopy -=1
    if (counterCopy < 0)  {counterCopy = this.props.tops.length - 1 }
    this.setState({
      bottomCounter: counterCopy,
      displayBottom: this.props.bottoms[counterCopy]
    })
  }
 

  //SaveButton will need to know which top/bottom is on display AND the user_id
  //pass this.state.displayTop to TopContainer
  //pass this.state.displayBottom to BottomContainer
  render(){
    console.log("main container state", this.state)
    return(
      <div className="main-container">
        <HeadContainer />
        <TopContainer top={this.state.displayTop} scrollRight={this.scrollRightTop} scrollLeft={this.scrollLeftTop}/>
        <BottomContainer bottom={this.state.displayBottom} scrollRight={this.scrollRightBottom} scrollLeft={this.scrollLeftBottom}/>
        <SaveButton user={this.props.user} top={this.state.displayTop} bottom={this.state.displayBottom} />
        <NewOutfitForm outfitSubmitHandler={this.props.outfitSubmitHandler}/>
      </div>
    )
  }
}

export default MainContainer;