import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className='navbar'><FontAwesomeIcon icon={faGlobe}/> My travel Journal</div>
  )
}

export default Navbar