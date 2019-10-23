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
    <Router>
    <h1>WELCOME TO CLUELESS STYLING</h1>
          <ul className="middle">
            <li>
              <Link to="/login">Login</Link>
              </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            </ul>

          <hr />
          <Switch>
          <Route path="/login" component={LogIn}>
              <LogIn submitHandler={props.login} />
            </Route>
            <Route path="/signup" component={SignUp}>
              <SignUp submitHandler={props.signup} />
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default Welcome;  