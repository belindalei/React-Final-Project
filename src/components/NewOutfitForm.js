import React from 'react'

const FormContainer = (props) => {

  return (
    <form>
      Create a new top or bottom:
      <br />
      <label>
        Top:
          <input
          name="Top"
          type="radio"
          checked={null}
          onChange={null} />
        Bottom:
          <input
          name="Bottom"
          type="radio"
          checked={null}
          onChange={null} />
      </label>
      <br />
      <label>
        Category:
          <select value={null} onChange={null}>
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
          <select value={null} onChange={null}>
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
          onChange={null} />
      </label>
    </form>
  )
}

export default FormContainer;