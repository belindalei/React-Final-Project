import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const SaveButton = (props) => {

 

  const handleClick = () => {
    console.log("save button props", props)
    let outfitBody = {
      user_id: props.user.user.id, 
      top_id: props.top.id,
      bottom_id: props.bottom.id
    }
    props.saveOutfit(outfitBody)
  }

  if (props.user) {
    return (
    
      <div className="save">
        <Button icon labelPosition='left' onClick={handleClick}>
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