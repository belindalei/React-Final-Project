import React from 'react';
import { Route, Switch } from 'react-router-dom' 
import MainContainer from './MainContainer'
import NavContainer from './NavContainer'
import OutfitContainer from './OutfitContainer'


class ClosetContainer extends React.Component {

  state = {
    tops: [],
    bottoms: [],
    displayBottoms: [],
    displayTops: [],
    outfits: []
  }

  componentDidMount(){
    this.fetchTops()
    this.fetchBottoms()
  }

  //componentDidUpdate to setState outfits to outfits sent with user GET response 
  //make Outfit Container to render outfits with scroll buttons to scroll through them (also needs button to return to main closet)
  //figure out routes to set the correct user paths 
    //Welcome Route: if user exists, just render main closet, otherwise render welcome with links to sign up or sign in
    // "/" root should go to closet
    // "/outfits" should show outfits
    // new outfit form will be pop up!

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
      // fetch('http://localhost:3000/tops', options)
      fetch('http://localhost:3000/api/v1/tops', options)
        .then(resp => resp.json())
        .then(data => this.createNewTop(data))
    } else if(!newOutfit.top){
      // fetch('http://localhost:3000/bottoms', options)
      fetch('http://localhost:3000/api/v1/bottoms', options)
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

  saveOutfit = (outfitBody) => {
    //post outfit to backend and update outfits array
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(outfitBody)
    }

    fetch("http://localhost:3000/api/v1/outfits", options)
    .then(resp => resp.json())
    .then((data)=>console.log(data))
    //add outfit to outfits array 
  }


  render(){
    return (
      <div className="App">
        <div className="wrapper">

          {this.props.user
          ?
          <Switch>
            {/* need to conditionally render a "return to closet" button in Nav if in /outfits and remove other buttons other than log out */}
            <Route path="/outfits" render={() => (
            <>
            <NavContainer /> 
            {/* can get outfits from user but need to pass tops and bottoms to be able to find the correct ones from the ids in outfits */}
            <OutfitContainer user={this.props.user} tops={this.state.tops} bottoms={this.state.bottoms}/> 
            </>
            )}/>

            <Route exact path="/" render={() => (
              <>
              <NavContainer 
                user={this.props.user} 
                sortTops={this.sortTops} 
                sortBottoms={this.sortBottoms} 
                logout={this.props.logout}
              />
              <MainContainer 
                user={this.props.user} 
                tops={this.state.displayTops} 
                bottoms={this.state.displayBottoms} 
                outfitSubmitHandler={this.outfitSubmitHandler} 
                saveOutfit={this.saveOutfit}
            /> 
            </>
            )}/>
            {/* this should render a "Sorry that page doesn't exist if the user types anything else"
            <Route path="/" component={Error} /> */}
           
          </Switch>
          :
          <h1>Loading</h1>
          }

        </div>
      </div>
    );
  }


}

export default ClosetContainer