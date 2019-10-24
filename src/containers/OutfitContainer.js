import React from "react"
import HeadContainer from './HeadContainer'
import TopContainer from './TopContainer'
import BottomContainer from './BottomContainer'

class OutfitContainer extends React.Component {
  state = {
    counter: 0,
    outfitTops: [],
    outfitBottoms: [],
    displayTop: {},
    displayBottom: {}
  }


  
  // componentDidMount() {
  //   this.fetchUserTopsAndBottoms()
  // }

  

  // fetchUserTopsAndBottoms = () => {
  //   if (this.props.user) {
  //     let id = this.props.user.id
  //     fetch(`http://localhost:3000/api/v1/users/${id}`)
  //     // fetch('http://localhost:3000/tops')
  //       .then(resp => resp.json())
  //       .then(data => {
  //         console.log(data.user.outfits)
  //         //   this.setState({ 
  //         //   outfitTops: data.tops,
  //         //   outfitBottoms: data.bottoms,
  //         //   displayTop: data.tops[0],
  //         //   displayBottom: data.bottoms[0]
  //         // })
  
  //       })

  //   }
  // }



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

  shouldComponentUpdate(prevProps) {
    return this.props.outfits !== prevProps.outfits
  }


  componentDidUpdate(prevProps) {
    // console.log("Main container props", prevProps, this.props)
    // if (this.props !== prevProps) {
      // if (this.props.outfits !== prevProps.outfits) {
      //   console.log("component did update")
      let outfitTopsCopy = [...this.state.outfitTops]
      let outfitBottomsCopy = [...this.state.outfitBottoms]
      outfitTopsCopy = this.getOutfitTops()
      outfitBottomsCopy = this.getOutfitBottoms()
      let displayTopCopy = {...this.state.displayTop}
      let displayBottomCopy = {...this.state.displayBottom}
      displayTopCopy = this.getOutfitTops()[0]
      displayBottomCopy = this.getOutfitBottoms()[0]
      
      this.setState({
        displayTop: displayTopCopy,
        displayBottom: displayBottomCopy,
        outfitTops: outfitTopsCopy,
        outfitBottoms: outfitBottomsCopy
      })
    // }
    // }
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