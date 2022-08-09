import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    const Logout=()=>{
        localStorage.clear();
        window.location.href = 'http://localhost:3000/'
    }
  return (
    <div>
      <NavLink to={'/'} onClick={Logout}>logout</NavLink>
    </div>
  )
}

export default Nav
