import React from 'react'
// import { Button, Icon } from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const OutfitsButton = () => {

  return (
    <div>
    <Link to="/outfits">
      <Button className="ui pink button">
        Go to saved outfits
      </Button>
    </Link>
    </div>
  )

}

export default OutfitsButton