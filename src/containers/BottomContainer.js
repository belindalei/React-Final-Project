import React from 'react'
import BottomCard from '../components/BottomCard'
import ScrollButtonRight from '../components/ScrollButtonRight'
import ScrollButtonLeft from '../components/ScrollButtonLeft'

class BottomContainer extends React.Component {

  state = {
    counter: 0
  }


  scrollRight = () => { 
    let counterCopy = this.state.counter
    counterCopy +=1
    if (counterCopy >= this.props.bottoms.length)  {counterCopy = 0 }
    this.setState({counter: counterCopy})
  }

  scrollLeft = () => {
    let counterCopy = this.state.counter
    counterCopy -=1
    if (counterCopy < 0)  {counterCopy = this.props.bottoms.length - 1 }
    this.setState({counter: counterCopy})
  }

  displayOneBottom = () => {
    let counter = this.state.counter;
    let copy = [...this.props.bottoms]
    let oneBottom = copy.splice(counter, 1)
    return oneBottom
  }

  renderBottoms = () => {
    return this.props.bottoms.map(bottom => {
      return <BottomCard
          key={bottom.id}
          bottom={bottom}
        />
    })
  }

  render() {
    let displayBottom = this.displayOneBottom().map(bottomObj => <BottomCard key={bottomObj.id} bottom={bottomObj} />)
    return (
      <div className="bottom-belt">
        <ScrollButtonLeft handleClick={this.scrollLeft}/>
        {/* {this.renderBottoms()} */}
        {displayBottom}
        <ScrollButtonRight handleClick={this.scrollRight}/>
      </div>
    )

  }

}

export default BottomContainer;
