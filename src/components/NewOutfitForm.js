import React from 'react'

class NewOutfitForm extends React.Component {

  state = {
    name: "",
    top: true,
    category: "",
    color: "",
    img_url: "" 
  }

  changeHandler = e => {
    if (e.target.name === "top") {
      this.setState({ top: true })
    } else if (e.target.name === "bottom") {
      this.setState({ top: false})
    } else {
      let value = e.target.value;
      this.setState({
        [e.target.name]: value
      });
    }
  };

  submitHandler = e => {
    e.preventDefault()
    console.log(this.props.outfitSubmitHandler)
    // this.props.outfitSubmitHandler(this.state)
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        Create a new top or bottom:
        <br />
        <label>
          Name:
            <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.changeHandler} />
        </label>
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
            <select name="category" value={this.state.category} onChange={this.changeHandler}>
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
            <select name="color" value={this.state.color} onChange={this.changeHandler}>
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
            value={this.state.img_url}
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

export default NewOutfitForm;