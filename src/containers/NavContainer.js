import React from 'react';
import SearchBarTop from '../components/SearchBarTop'
import SearchBarBottom from '../components/SearchBarBottom'

const NavContainer = (props) => {

  return(
    <div className="nav-container">
      <h1>Side Nav</h1>
      <SearchBarTop sortTops={props.sortTops} />
      <SearchBarBottom sortBottoms={props.sortBottoms} />
    </div>
  )

}

export default NavContainer;