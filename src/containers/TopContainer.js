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
    //method to get photo with one index higher than one currently in center
  }

  scrollLeft = () => {

  }


  renderTops = () => {
    return this.props.tops.map(top => {
      return <TopCard 
      key={top.id} 
      top={top}
      />
    })
  }

  render () {
    return(
      <div className="top-belt">
        <ScrollButtonLeft />
        {this.renderTops()}
        <ScrollButtonRight />
      </div>
    )
  }


}

export default TopContainer;