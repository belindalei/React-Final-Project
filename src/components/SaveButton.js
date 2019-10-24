import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

//on click of the save button the props will be sent to the main container, then the closet container, and saved in state 
//from state the outfit user id, bottom id, and top id will be sent to the favorite container
//in the favorite container we will look for the tops and bottoms with the matching id through props and display them accordingly 

const SaveButton = (props) => {

  const handleClick = () => {
    let outfitBody = {
      user_id: props.user.id, 
      top_id: props.top.id,
      bottom_id: props.bottom.id
    }
    props.saveOutfit(outfitBody)
  }

  if (props.user) {
    return (
    
      <div className="save">
        <Button className="ui pink button" icon labelPosition='left' onClick={handleClick}>
          <Icon name='save' />
          Save Outfit
        </Button>
      </div>
    )
  } else {
    return (
      <p>Loading</p>
    )
  }

}

export default SaveButton