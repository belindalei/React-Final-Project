import React from 'react'
import TopCard from '../components/TopCard' 
import ScrollButtonRight from '../components/ScrollButtonRight'
import ScrollButtonLeft from '../components/ScrollButtonLeft'

class TopContainer extends React.Component {
  state = {
    counter: 0
  }

  //write method to only show one top at a time and buttons to move through them

  scrollRight = () => { 
    let counterCopy = this.state.counter
    counterCopy +=1
    if (counterCopy >= this.props.tops.length)  {counterCopy = 0 }
    this.setState({counter: counterCopy})
  }

  scrollLeft = () => {
    let counterCopy = this.state.counter
    counterCopy -=1
    if (counterCopy < 0)  {counterCopy = this.props.tops.length - 1 }
    this.setState({counter: counterCopy})
  }

  //I will never undestand why this didn't work, but likely has something to do with async 
  // renderOneTop = () => {
  //   let counter = this.state.counter;
  //   let topsCopy = [...this.props.tops]
  //   let oneTop = topsCopy[counter]
  //   return oneTop
  //   // return <TopCard key={oneTop.id} top={oneTop} />
  // }
 
  displayOneTop = () => {
    let counter = this.state.counter;
    let copy = [...this.props.tops]
    let oneTop = copy.splice(counter, 1)
    return oneTop
  }

  renderTops = () => {
    return this.props.tops.map(top => {
      return <TopCard key={top.id} top={top}/>
    })
  }

  render () {
    let displayTop = this.displayOneTop().map(topObj => <TopCard key={topObj.id} top={topObj} />)
    return(
      <div className="top-belt">
        <ScrollButtonLeft handleClick={this.scrollLeft}/>
        {displayTop}
        <ScrollButtonRight handleClick={this.scrollRight}/>
      </div>
    )
    
    
  }


}

export default TopContainer;