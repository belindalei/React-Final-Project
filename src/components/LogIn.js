import React from "react"

class LogIn extends React.Component {
  state = {
      username: "",
      password: ""
  }

  changeHandler = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  submitHandler = (e) => {
      e.preventDefault()
      this.props.submitHandler(this.state)
      this.setState({
          name: "",
          password: ""
      })
  }

  render() {
      return (
        <form className="ui small form" id="signup-login" onSubmit={this.submitHandler}>
          <center>
            <h1>Log In</h1>
          </center>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="enter username"
            onChange={this.changeHandler}
          />
          <br></br>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="enter password"
            onChange={this.changeHandler}
          />
          <br />
          <br />
          <center>
            <input
              className="ui inverted button"
              type="submit"
              value="submit"
            />
          </center>
        </form>
      );
  }
}

export default LogIn