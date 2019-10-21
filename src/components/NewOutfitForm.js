import React from 'react'

class FormContainer extends React.Component {

  state = {
    top: true,
    category: "",
    color: "",
    img_url: "" 
  }

  changeHandler = e => {
    console.log(e.target.name)
    // if (e.target.name === "notVegetarian") {
    //   this.setState({ vegetarian: false })
    // } else if (e.target.name === "Vegetarian") {
    //   this.setState({ vegetarian: true })
    // } else {
    //   let value = e.target.value;
    //   this.setState({
    //     [e.target.name]: value
    //   });
    // }
  };

  render(){
    return (
      <form onSubmit={this.props.submitHandler}>
        Create a new top or bottom:
        <br />
        <label>
          Top:
            <input
            name="top"
            value="top"
            type="radio"
            checked={this.state.top}
            onChange={this.changeHandler} />
          Bottom:
            <input
            name="bottom"
            type="radio"
            value="bottom"
            checked={!this.state.top}
            onChange={this.changeHandler} />
        </label>
        <br />
        <label>
          Category:
            <select value={this.state.category} onChange={this.changeHandler}>
            <option value="long sleeve">Long Sleeve</option>
            <option value="short sleeve">Short Sleeve</option>
            <option value="jeans">Jeans</option>
            <option value="skirt">Skirt</option>
            <option value="pants">Pants</option>
          </select>
        </label>
        <label>
          <br />
          Pick the color:
            <select value={null} onChange={this.changeHandler}>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Grey">Grey</option>
            <option value="Orange">Orange</option>
            <option value="Purple">Purple</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
            <option value="Yellow">Yellow</option>
          </select>
        </label>
        <br />
        <label>
          Image URL:
            <input
            name="img_url"
            type="text"
            value={null}
            onChange={this.changeHandler} />
        </label>
        <button
          type="submit"
          className="ui pink button"
        >Submit</button>
      </form>
    )
  }
}

export default FormContainer;