import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Beers">Beers</Link>
        </li>
        <li>
        <Link to="/NewBeer">New Beer</Link>
        </li>
        <li>
        <Link to="/RandomBeer">Random Beer</Link>
        </li>
      </ul>
    </nav>
  )
}
