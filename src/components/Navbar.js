import React from 'react'
import PropTypes from 'prop-types'
import '../style/navbar.css'
const Navbar = (props) => {
  return (
    <div className='navbar'>
        <div className='text'>Home </div>
        <div className='text active'>Dashboard</div>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar