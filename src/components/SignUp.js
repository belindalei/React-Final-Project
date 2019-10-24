import React from "react"
import SimpleReactValidator from "simple-react-validator";

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator();
    this.state = {
    username: "",
    password: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if(this.validator.allValid()) {
        this.props.submitHandler(this.state);
        this.setState({
        name: "",
        password: ""
        });
    } else {
        this.validator.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        this.forceUpdate();
    }
  };

  render() {
    return (
      <form
        className="ui small form"
        id="signup-login"
        onSubmit={this.submitHandler}
      >
        <center>
          <h1>Sign Up</h1>
        </center>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="enter username"
          onChange={this.changeHandler}
        />
        {this.validator.message(
          "username",
          this.state.username,
          "required|username"
        )}
        <br />
        <label>Password</label>
        <input
          className="ui input focus"
          type="password"
          name="password"
          value={this.state.password}
          placeholder="enter password"
          onChange={this.changeHandler}
        />
        {this.validator.message(
          "password",
          this.state.password,
          "required|password"
        )}
        <br />
        <br />
        <center>
          <input className="ui inverted button" type="submit" value="submit" />
        </center>
      </form>
    );
  }
}

export default SignUp