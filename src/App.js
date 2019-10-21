import React from 'react';
import { Route, Switch } from 'react-router-dom' 
import './App.css';
import ClosetContainer from './containers/ClosetContainer'
// import MainContainer from './containers/MainContainer'
// import NavContainer from './containers/NavContainer'
import Welcome from './components/Welcome'

class App extends React.Component {

  state = {
    user: {}
  }

  componentDidMount(){
    //check for logged in user in localStorage
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
          <ClosetContainer user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default App;
