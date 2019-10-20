import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const SaveButton = () => {

  return (
    <div className="save">
      <Button icon labelPosition='left'>
        <Icon name='save' />
        Save Outfit
      </Button>
    </div>
  )

}

export default SaveButton