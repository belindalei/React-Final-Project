import React from 'react';
import SearchBarTop from '../components/SearchBarTop'
import SearchBarBottom from '../components/SearchBarBottom'
import OutfitsButton from '../components/OutfitsButton';
import LogOut from '../components/LogOut'

const NavContainer = (props) => {
  
  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  }
  
  if (props.user) {
    return(
      <div className="nav-container">
        
        <SearchBarTop sortTops={props.sortTops} />
        <SearchBarBottom sortBottoms={props.sortBottoms} />
        <br/>
        <OutfitsButton user={props.user} />
        <br/>
        <button className="ui pink button" onClick={openForm}>Add Article of Clothing to Closet</button>
        <br/>
        <br/>
        <LogOut logout={props.logout}/> 
      </div>
    )
  } else {
    return <div>Loading</div>
  }

}

export default NavContainer;