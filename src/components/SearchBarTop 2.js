import React from 'react';

const SearchBarTop = (props) => {

  const changeHandler = (e) => {
    props.sortTops(e.target.value)
  }

  return (
    <div>
      <label>
        <strong>Filter Tops by Color:</strong>
        <select onChange={changeHandler}>
          <option value="All">All</option>
          <option value="Black">Black</option>
          <option value="Orange">Orange</option>
          <option value="Grey">Grey</option>
          <option value="Red">Red</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBarTop;
