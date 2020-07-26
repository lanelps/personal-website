import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <nav className='nav'>
      <span>
        <Link to='/'>Home</Link>
      </span>

      <span>
        <Link to='/about'>About</Link>
      </span>

      <span>
        <Link to='/'>Work</Link>
      </span>

      <span>
        <Link to='/contact'>Contact</Link>
      </span>

      <span>
        <Link to='/experiments'>Experiments</Link>
      </span>

      <span>
        <Link to='/services'>Services</Link>
      </span>
    </nav>
  )
}
