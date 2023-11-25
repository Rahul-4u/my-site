import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
const [Mobile, setMobile] = useState(false);

  return (
    <div>
      <div className="nav">
        <div className="container nav-item">

          <div className="nav-logo">
            <a href="/"><img src="img2/logo.png" alt="" /></a>
          </div>

          

          <div className="nav-menu">
            <ul className={Mobile ? 'show' : 'hide'}>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/About'}>About</Link></li>
              <li><Link to={'/Service'}>Service</Link></li>
              <li><Link to={'/Skill'}>Skill</Link></li>
              <li><Link to={'/Contact'}>Contact</Link></li>
            </ul>
          </div>


         
          <button  className="btnn" onClick={()=>{setMobile(!Mobile)}}> {Mobile?<i className='fa fa-times'></i> : <i class="fa-solid fa-bars"></i>} </button>
  
        </div>
      </div>
    </div>
  )
}
