import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'

function Navbar() {
  return (
  <>
  <div className="navbar">
    <img className='logo' src={assets.logo} alt="Logo" />
    <img className='profile' src={assets.profile_image} alt="profile_img" />
  </div>
  </>
  )
}

export default Navbar