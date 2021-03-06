import React from 'react'
import SimpleReactValidator from "simple-react-validator";

class NewOutfitForm extends React.Component {

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      name: "",
      top: true,
      category: "Long Sleeve",
      color: "Black",
      img_url: ""
    };
  }

  changeHandler = e => {
    if (e.target.name === "top") {
      this.setState({ top: true });
    } else if (e.target.name === "bottom") {
      this.setState({ top: false });
    } else {
      let value = e.target.value;
      this.setState({
        [e.target.name]: value
      });
    }
  };

  submitHandler = e => {
    //console.log e target and only submit if submit form and not close form
    e.preventDefault();
    
    if (this.validator.allValid()) {
      this.props.outfitSubmitHandler(this.state);
      this.setState({
        name: "",
        top: true,
        category: "Long Sleeve",
        color: "Black",
        img_url: ""
      });
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  };

  //closing the form sends another submission to the backend. WHY????????? ANSWER: because the close form button was in the <form></form>, the onSubmit listener was taking any click on a form button and then posting
  //for now I moved the close form buttom out of the <form></form>, and also removed type="submit"; one of those might fix it
  closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  };

  render() {
    return (
      <div className="form-popup form-container" id="myForm">
        <form className="form-container" onSubmit={this.submitHandler}>
          <h1>Create a new top or bottom:</h1>
          <br />
          <label>
            <h3>Name:</h3>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.changeHandler}
            />
            {this.validator.message("name", this.state.name, "required|name")}
          </label>
          <label>
            <h3>What type of clothing item?</h3>
            Top
            <input
              name="top"
              value="top"
              type="radio"
              checked={this.state.top}
              onChange={this.changeHandler}
            />
            <br />
            Bottom
            <input
              name="bottom"
              type="radio"
              value="bottom"
              checked={!this.state.top}
              onChange={this.changeHandler}
            />
          </label>
          <br />
          <br />
          <label>
            <h3>Category:</h3>
            <select
              name="category"
              value={this.state.category}
              onChange={this.changeHandler}
            >
              <option value="long sleeve">Long Sleeve</option>
              <option value="short sleeve">Short Sleeve</option>
              <option value="jeans">Jeans</option>
              <option value="skirt">Skirt</option>
              <option value="pants">Pants</option>
            </select>
          </label>
          <label>
            <br />
            <h3>Pick the color:</h3>
            <select
              name="color"
              value={this.state.color}
              onChange={this.changeHandler}
            >
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
          <br />
          <label>
            <h3>Image URL:</h3>
            <input
              name="img_url"
              type="text"
              value={this.state.img_url}
              onChange={this.changeHandler}
            />
            {this.validator.message("img_url", this.state.img_url, "required|img_url")}
          </label>
          <button type="submit" className="ui pink button">
            Submit
          </button>
        </form>
        <button className="ui red button" onClick={this.closeForm}>
          Close Form
        </button>
      </div>
    );
  }
}

export default NewOutfitForm;