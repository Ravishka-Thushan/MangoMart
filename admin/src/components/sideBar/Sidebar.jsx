import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt='add_icon'/>
                <p>Add Mangoes</p>
            </NavLink>
            <NavLink to='/varieties' className="sidebar-option">
                <img src={assets.order_icon} alt='add_icon'/>
                <p>Mangoe Varieties</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <img src={assets.order_icon} alt='add_icon'/>
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar