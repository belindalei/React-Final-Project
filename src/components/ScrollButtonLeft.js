import React from 'react';
import { Icon } from 'semantic-ui-react';

const ScrollButtonLeft = (props) => {
  return (
    <Icon name='angle double left' size='massive' onClick={() => props.handleClick()}/>
  )

}

export default ScrollButtonLeft;