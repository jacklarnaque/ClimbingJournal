import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src='images/globe.webp' alt='globe' className='logo--globe--navbar'/> 
      <h1>My Climbing Journal</h1>
      </div>
  )
}

export default Navbar