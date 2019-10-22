import React from 'react';
import { Route, Switch } from 'react-router-dom' 
import './App.css';
import ClosetContainer from './containers/ClosetContainer'
// import MainContainer from './containers/MainContainer'
// import NavContainer from './containers/NavContainer'
import Welcome from './components/Welcome'
import SignUp from './components/SignUp'

class App extends React.Component {

  state = {
    user: {}
  }

  componentDidMount() {
    if (localStorage.token) {
      let token = localStorage.token
      fetch("http://localhost:3000/api/v1/autologin", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(user => this.setState({ user }))
    }
  }

  signup = (userInfo) => {
    console.log("submitting")
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(response => {
        localStorage.setItem("token", response.token)
        this.setState({ user: response.user })
      })
  }

  
  //welcome route should have the log in/sign up forms
  //figure out /outfits route --should it render an OutfitsContainer similar to Closet Container that renders the NavContainer and OutfitCardContainer (which renders the user's outfits)
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/welcome" component={Welcome}/>
        </Switch>
        <div>
          <SignUp submitHandler={this.signup}/>
          <ClosetContainer user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default App;
