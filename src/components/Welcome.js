import React from "react";
import SignUp from './SignUp'
import LogIn from './LogIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../stylesheets/welcomePage.css'


const Welcome = (props) => {

  return(
    <div className="bgimg">

      {/* need to fix this bc if you click sing up, you can't click log in. should be able to click both */}
    <Router>
    <h1 className="welcome-header">WELCOME TO CLUELESS STYLING</h1>
          <ul className="middle">
            <li className="ui red inverted header">
              <Link to="/login">Login</Link>
            </li>
            <li className="ui red inverted header">
              <Link to="/signup">Signup</Link>
            </li>
            </ul>

          <hr />
          <Switch>
          <Route exact path="/login" component={LogIn}>
              <LogIn submitHandler={props.login} />
            </Route>
            <Route exact path="/signup" component={SignUp}>
              <SignUp submitHandler={props.signup} />
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default Welcome;  