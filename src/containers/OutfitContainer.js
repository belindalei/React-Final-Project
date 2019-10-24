import React from "react"
import { withRouter } from 'react-router-dom' 
import HeadContainer from './HeadContainer'
import TopContainer from './TopContainer'
import BottomContainer from './BottomContainer'
import OutfitCard from '../components/OutfitCard'
import ScrollButtonRight from '../components/ScrollButtonRight'
import ScrollButtonLeft from '../components/ScrollButtonLeft'
import TopCard from '../components/TopCard'
import BottomCard from '../components/BottomCard'

class OutfitContainer extends React.Component {
  state = {
    counter: 0,
    displayTop: {},
    displayBottom: {}
  }


  
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      console.log("updating")
      let displayTopCopy = this.props.user.tops[0]
      let displayBottomCopy = this.props.user.bottoms[0]
      this.setState({
        displayTop: displayTopCopy,
        displayBottom: displayBottomCopy
      })
    }
  }

  shouldComponentUpdate() {
    return this.props.user 
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
    let counterCopy = this.state.counter
    counterCopy +=1
    if (counterCopy >= this.props.user.tops.length)  {counterCopy = 0 }
    this.setState({
      counter: counterCopy,
      // displayTop: this.props.tops[counterCopy]
    })
  }

  scrollLeft = () => {
    let counterCopy = this.state.counter
    counterCopy -=1
    if (counterCopy < 0)  {counterCopy = this.props.user.tops.length - 1 }
    this.setState({
      counter: counterCopy,
      // displayTop: this.props.tops[counterCopy]
    })
  }

  //need to get outfits out of the user passed from props and then find each corresponding top/bottom to display and scroll through

  //need scrollRightOutfit & scrollLeftOutfit functions to pass to one of the containers
  //need to move both the top and the bottom with one click


  render(){
   
    if (this.props.user) {
      let displayTop = this.props.user.tops[this.state.counter]
      let displayBottom = this.props.user.bottoms[this.state.counter]
      
      return(
        <div className="main-container">
          {/* <h1>Outfit container</h1> */}
          <HeadContainer />
          <div className="top-belt">
            <TopCard top={displayTop}/>
          </div>
          
          <div className="bottom-belt">
            <ScrollButtonLeft handleClick={this.scrollLeft}/>
            <BottomCard bottom={displayBottom} />
            <ScrollButtonRight handleClick={this.scrollRight}/>
          </div>
        
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
    
  }


}

export default withRouter(OutfitContainer)