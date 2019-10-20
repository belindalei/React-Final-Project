import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import NavContainer from './containers/NavContainer'

class App extends React.Component {

  state = {
    tops: [],
    bottoms: [],
    displayBottoms: [],
    displayTops: []
  }

  componentDidMount(){
    this.fetchTops()
    this.fetchBottoms()
  }

  fetchTops = () => {
    // fetch('http://localhost:3000/api/v1/tops')
    fetch('http://localhost:3000/tops')
      .then(resp => resp.json())
      .then(data => this.setState({ 
        tops: data,
        displayTops: data
      }))
  }

  fetchBottoms = () => {
    // fetch("http://localhost:3000/api/v1/bottoms")
    fetch('http://localhost:3000/bottoms')
      .then(resp => resp.json())
      .then(data => this.setState({ 
        bottoms: data,
        displayBottoms: data 
      }))
  }

  sortTops = (selection) => {
      let copyTops = [...this.state.tops]
      if(selection === "All"){
        this.setState({displayTops: copyTops})
      } else{
        let sortedTops = copyTops.filter(top => top.color.toUpperCase() === selection.toUpperCase())
        this.setState({
          displayTops: sortedTops
        })
      }
  }

  sortBottoms = (selection) => {
    let copyBottoms = [...this.state.bottoms]
    if (selection === "All") {
      this.setState({ displayBottoms: copyBottoms })
    } else {
      let sortedBottoms = copyBottoms.filter(bottom => bottom.color.toUpperCase() === selection.toUpperCase())
      this.setState({
        displayBottoms: sortedBottoms
      })
    }
  }

  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <NavContainer sortTops={this.sortTops} sortBottoms={this.sortBottoms} />
          <MainContainer tops={this.state.displayTops} bottoms={this.state.displayBottoms} />
        </div>
      </div>
    );
  }
}

export default App;
