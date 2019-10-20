import React from 'react'
import BottomCard from '../components/BottomCard'
import ScrollButtonRight from '../components/ScrollButtonRight'
import ScrollButtonLeft from '../components/ScrollButtonLeft'

class BottomContainer extends React.Component {

  renderBottoms = () => {
    
    return this.props.bottoms.map(bottom => {
      return <BottomCard
          key={bottom.id}
          bottom={bottom}
        />
    })
  }

  render() {
    return (
      <div className="bottom-belt">
        <ScrollButtonLeft />
        {this.renderBottoms()}
        <ScrollButtonRight />
      </div>
    )

  }

}

export default BottomContainer;
