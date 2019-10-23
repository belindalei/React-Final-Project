import React from "react"
import HeadContainer from './HeadContainer'
import TopContainer from './TopContainer'
import BottomContainer from './BottomContainer'

class OutfitContainer extends React.Component {
  state = {
    counter: 0,
    displayTop: {},
    displayBottom: {}
  }

  //need to get outfits out of the user passed from props and then find each corresponding top/bottom to display and scroll through

  //need scrollRightOutfit & scrollLeftOutfit functions to pass to one of the containers
  //need to move both the top and the bottom with one click


  render(){
    // console.log("main container props", this.props)
    return(
      <div className="main-container">
        <h1>Outfit container</h1>
        {/* <HeadContainer />
        <TopContainer top={this.state.displayTop} />
        <BottomContainer bottom={this.state.displayBottom} scrollRight={this.scrollRightOutfit} scrollLeft={this.scrollLeftOutfit}/> */}
  
      </div>
    )
  }


}

export default OutfitContainer