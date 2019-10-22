import React from 'react';
import { Route, Switch } from 'react-router-dom' 
import MainContainer from './MainContainer'
import NavContainer from './NavContainer'

class ClosetContainer extends React.Component {

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
    fetch('http://localhost:3000/api/v1/tops')
    // fetch('http://localhost:3000/tops')
      .then(resp => resp.json())
      .then(data => this.setState({ 
        tops: data,
        displayTops: data
      }))
  }

  fetchBottoms = () => {
    fetch("http://localhost:3000/api/v1/bottoms")
    // fetch('http://localhost:3000/bottoms')
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

  outfitSubmitHandler = (newOutfit) => {

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        name: newOutfit.name,
        img_url: newOutfit.img_url,
        category: newOutfit.category,
        color: newOutfit.color
      })
    }
  

    if(newOutfit.top){
      fetch('http://localhost:3000/tops', options)
      // fetch('http://localhost:3000/api/v1/tops', options)
        .then(resp => resp.json())
        .then(data => this.createNewTop(data))
    } else if(!newOutfit.top){
      fetch('http://localhost:3000/bottoms', options)
      // fetch('http://localhost:3000/api/v1/bottoms', options)
        .then(resp => resp.json())
        .then(data => this.createNewBottom(data))
    }
  }

  createNewTop = (newTop) => {
    this.setState({
      displayTops: [...this.state.tops, newTop]
    })
  }

  createNewBottom = (newBottom) => {
    this.setState({
      displayBottoms: [...this.state.bottoms, newBottom]
    })
  }


  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <NavContainer sortTops={this.sortTops} sortBottoms={this.sortBottoms} />
          <MainContainer tops={this.state.displayTops} bottoms={this.state.displayBottoms} outfitSubmitHandler={this.outfitSubmitHandler} /> 
        </div>
      </div>
    );
  }


}

export default ClosetContainer