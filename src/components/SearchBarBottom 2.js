import React from 'react';

const SearchBarBottom = (props) => {


  const changeHandler = (e) => {
    props.sortBottoms(e.target.value)
  }

  return (
    <div>
      <label>
        <strong>Filter Bottoms by Color:</strong>
        <select onChange={changeHandler}>
          <option value="All">All</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBarBottom;
