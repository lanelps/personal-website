import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav className='nav'>
      <span>
        <Link to='/'>Home</Link>
      </span>

      <span>
        <Link to='/'>About</Link>
      </span>

      <span>
        <Link to='/'>Work</Link>
      </span>

      <span>
        <Link to='/'>Contact</Link>
      </span>

      <span>
        <Link to='/'>Experiments</Link>
      </span>

      <span>
        <Link to='/'>Services</Link>
      </span>
    </nav>
  )
}
