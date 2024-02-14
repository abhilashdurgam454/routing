import React from 'react'

import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='container'>
       
        
        <div>
            <h1>LOGO</h1>
        </div>
       <ul className='box'>
       <Link style={{textDecoration: 'none'}} to='/'>Home</Link>
       <Link style={{textDecoration: 'none'}} to='/services'>Services</Link>
       <Link style={{textDecoration: 'none'}} to='/aboutus'>About Us</Link>
       <Link style={{textDecoration: 'none'}} to='/conatactus'>Contact Us</Link>


       </ul>


       



    </div>
  )
}

export default Navigation