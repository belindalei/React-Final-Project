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
          <form className="ui huge form" onSubmit={this.submitHandler}>
              <h1>Log In</h1>
              <input type="text" name="username" value={this.state.username} placeholder="enter username" onChange={this.changeHandler} />
              <input type="password" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} />
              <input className="ui inverted button" type="submit" value="submit" />
          </form>
      )
  }
}

export default LogIn