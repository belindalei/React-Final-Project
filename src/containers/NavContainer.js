import React from 'react';
import SearchBarTop from '../components/SearchBarTop'
import SearchBarBottom from '../components/SearchBarBottom'
import OutfitsButton from '../components/OutfitsButton';

const NavContainer = (props) => {

  if (props.user) {
    return(
      <div className="nav-container">
        <h1>Side Nav</h1>
        <SearchBarTop sortTops={props.sortTops} />
        <SearchBarBottom sortBottoms={props.sortBottoms} />
        <br/>
        <OutfitsButton user={props.user}/>
      </div>
    )
    } else {
      return <div>Loading</div>
    }

}

export default NavContainer;