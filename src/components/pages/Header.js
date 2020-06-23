//Header.js

import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/main-login'>Login</Link></li>
        <li><Link to='/main-logout'>Logout</Link></li>
        
        TODO - Convert this to the Login/Logout bar
        
      </ul>
    </nav>
  </header>
)


export { Header };


// NOTES
// // Issue with the combination of more than one slash and then having hyphens AND underscores in path names all together - using react router dom.
// https://stackoverflow.com/questions/50088100/matching-routes-with-hyphens-in-react-router

// GARBAGE AND DEPRECATING
//export default Header
// <li><Link to='/schedule'>Schedule</Link></li>