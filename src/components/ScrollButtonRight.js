import React from 'react';
import { Icon } from 'semantic-ui-react';

const ScrollButtonRight = (props) => {
  // console.log("ScrollButton props ", props)
  return (
    <Icon name='angle double right' size='massive' onClick={() => props.handleClick()}/>
  )

}

export default ScrollButtonRight;

