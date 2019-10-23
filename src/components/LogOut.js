import React from 'react'
// import { Button} from 'semantic-ui-react'

const LogOut = (props) => {
  return (
    <button className="ui pink button" onClick={()=>props.logout()}>Log Out</button>
  )
}

export default LogOut