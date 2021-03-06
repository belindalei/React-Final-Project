import React from "react";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import './stylesheets/App.css';
import ClosetContainer from './containers/ClosetContainer'
import Welcome from './components/Welcome'
// import SignUp from './components/SignUp'
// import LogIn from './components/LogIn'
// import LogOut from './components/LogOut'

class App extends React.Component {

  state = {
    user: {}
  }

  componentDidMount() {
    if (localStorage.token) {
      let token = localStorage.token
      console.log("token =", token)
      fetch("http://localhost:3000/api/v1/autologin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(resp => this.setState({ 
          user: resp.user}))
    }
  }

  signup = (userInfo) => {
    // console.log("submitting")
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(response => {
        localStorage.setItem("token", response.token)
        this.setState({ user: response.user })
      })
  }

  login = (userInfo) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(resp => resp.json())
      .then(response => {
        localStorage.setItem("token", response.token)
        this.setState({
          user: response.user
        })
        // }, () => this.props.history.push("/klowns"))
      })
  }

  logout = () => {
    localStorage.removeItem("token")
    this.setState({user: {}})
    //should also redirect to welcome page
  }
  

  
  //welcome route should have the log in/sign up forms (need a conditional to check for a user/token and if not then send to welcome route)
  //figure out /outfits route --should it render an OutfitsContainer similar to Closet Container that renders the NavContainer and OutfitCardContainer (which renders the user's outfits)
  render(){
    // console.log("app state:", this.state)
    return (
      <div className="App">

        <Switch>
            {/* if you are logged in and try to go to /welcome, redirect to home page. Otherwise go to welcome */}
            <Route path="/welcome">
              {localStorage.token
                ?
                <Redirect to="/"/>
                :
                <Welcome signup={this.signup} login={this.login}/>}
            </Route>
            {/* if you are not logged in and try to go to any page, redirect to welcome. Otherwise go to that page */}
            <Route path="/">
              {localStorage.token
                ?
                <ClosetContainer user={this.state.user} logout={this.logout}/>
                :
                <Redirect to="/welcome" />}
            </Route>
          </Switch>



          {/* <Switch>
            <Route path="/welcome">
              <Welcome signup={this.signup} login={this.login}/>
            </Route>
            <Route path="/outfits" >
              <ClosetContainer user={this.state.user} />
            </Route>
          </Switch>
        <div>
          <SignUp submitHandler={this.signup}/> 
          <LogIn submitHandler={this.login}/> 
          <LogOut logout={this.logout}/> 
        </div> */}
      </div>
    );
  }
}

export default withRouter(App);
