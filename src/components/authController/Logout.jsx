import React from 'react'
import { Link } from "react-router-dom"

function Logout() {
  return (
    <div>
        <h1>Logged out</h1><br/><br/><br/><br/>
        <Link to="/logintemplate">Login again</Link><br/>
      
    </div>
  )
}

export default Logout
