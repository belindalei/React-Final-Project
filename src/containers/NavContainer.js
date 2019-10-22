import React from 'react';
import SearchBarTop from '../components/SearchBarTop'
import SearchBarBottom from '../components/SearchBarBottom'
import OutfitsButton from '../components/OutfitsButton';

const NavContainer = (props) => {

  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  }

  return(
    <div className="nav-container">
      <h1>Side Nav</h1>
      <SearchBarTop sortTops={props.sortTops} />
      <SearchBarBottom sortBottoms={props.sortBottoms} />
      <br/>
      <OutfitsButton/>
      <br/>
      <button className="ui pink button" onClick={openForm}>Create New Outfit</button>
    </div>
  )

}

export default NavContainer;