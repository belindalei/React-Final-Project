import React from 'react'
import HeadContainer from "./HeadContainer";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

class FavoriteContainer extends React.Component {

  state = {
    topCounter: 0,
    bottomCounter: 0,
    displayTop: {},
    displayBottom: {}
  };

  componentDidUpdate(prevProps) {

    const foundTops = []

    if (this.props !== prevProps) {
      this.props.allTops.forEach(top => {
        this.props.outfits.forEach( outfit => {
          if(top.id === outfit.top_id){
            foundTops.push(top)
          }
        })
      })

      console.log(this.state.displayTop)
  
      // this.setState({
      //   displayTop: foundTops,
      //   displayBottom: foundBottoms
      // });
    }
  }

  scrollRightTop = () => {
    let counterCopy = this.state.topCounter;
    counterCopy += 1;
    if (counterCopy >= this.props.tops.length) {
      counterCopy = 0;
    }
    this.setState({
      topCounter: counterCopy,
      displayTop: this.props.tops[counterCopy]
    });
  };

  scrollLeftTop = () => {
    let counterCopy = this.state.topCounter;
    counterCopy -= 1;
    if (counterCopy < 0) {
      counterCopy = this.props.tops.length - 1;
    }
    this.setState({
      topCounter: counterCopy,
      displayTop: this.props.tops[counterCopy]
    });
  };

  scrollRightBottom = () => {
    let counterCopy = this.state.bottomCounter;
    counterCopy += 1;
    if (counterCopy >= this.props.tops.length) {
      counterCopy = 0;
    }
    this.setState({
      bottomCounter: counterCopy,
      displayBottom: this.props.bottoms[counterCopy]
    });
  };

  scrollLeftBottom = () => {
    let counterCopy = this.state.bottomCounter;
    counterCopy -= 1;
    if (counterCopy < 0) {
      counterCopy = this.props.tops.length - 1;
    }
    this.setState({
      bottomCounter: counterCopy,
      displayBottom: this.props.bottoms[counterCopy]
    });
  };

  render() {
    return (
      <div className="main-container">
        <HeadContainer />
        <TopContainer
          top={this.state.displayTop}
          scrollRight={this.scrollRightTop}
          scrollLeft={this.scrollLeftTop}
        />
        <BottomContainer
          bottom={this.state.displayBottom}
          scrollRight={this.scrollRightBottom}
          scrollLeft={this.scrollLeftBottom}
        />
      </div>
    );
  }
}

export default FavoriteContainer;