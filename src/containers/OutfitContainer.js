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


  
  componentDidUpdate(prevProps) {
    console.log("updating")
    if (this.props !== prevProps) {
      let displayTopCopy = this.props.user.tops[0]
      let displayBottomCopy = this.props.user.bottoms[0]
      this.setState({
        displayTop: displayTopCopy,
        displayBottom: displayBottomCopy
      })
    }
  }

  shouldComponentUpdate(prevProps) {
    return this.props.user !== prevProps.user
  }

  //iterate through outfits to get the top_ids and then make an array of tops

  getOutfitTops = () => {
    let tops = this.props.outfits.map(outfit => {
      return outfit.top_id = this.props.tops.find(top => top.id === outfit.top_id)
    })
    // console.log(tops)
    return tops
  }

  getOutfitBottoms = () => {
    let bottoms = this.props.outfits.map(outfit => {
      return outfit.bottom_id = this.props.bottoms.find(bottom => bottom.id === outfit.bottom_id)
    })
    // console.log(bottoms)
    return bottoms
  }

  





  scrollRight = () => { 
    let counterCopy = this.state.topCounter
    counterCopy +=1
    if (counterCopy >= this.props.tops.length)  {counterCopy = 0 }
    this.setState({
      topCounter: counterCopy,
      displayTop: this.props.tops[counterCopy]
    })
  }

  scrollLeft = () => {
    let counterCopy = this.state.topCounter
    counterCopy -=1
    if (counterCopy < 0)  {counterCopy = this.props.tops.length - 1 }
    this.setState({
      topCounter: counterCopy,
      displayTop: this.props.tops[counterCopy]
    })
  }

  //need to get outfits out of the user passed from props and then find each corresponding top/bottom to display and scroll through

  //need scrollRightOutfit & scrollLeftOutfit functions to pass to one of the containers
  //need to move both the top and the bottom with one click


  render(){
    console.log("outfit container state", this.state)
    console.log("outfit container props", this.props)
    
    return(
      <div className="main-container">
        <h1>Outfit container</h1>
        { <HeadContainer />
        /*<TopContainer top={this.state.displayTop} />
        <BottomContainer bottom={this.state.displayBottom} scrollRight={this.scrollRight} scrollLeft={this.scrollLeft}/> */}
  
      </div>
    )
  }


}

export default OutfitContainer