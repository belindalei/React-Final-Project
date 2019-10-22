import React from 'react'

const LogOut = (props) => {
  return (
    <button onClick={()=>props.logout()}>Log Out</button>
  )
}

export default LogOut