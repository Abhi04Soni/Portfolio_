import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {

  
  
  return (
    <div className='navbarContainer'>
      <ul>
        <li><Link to="/">Abhi. </Link></li>
        <li>
          <ul>
            <li><Link to="/projects">Projects </Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li>
              <a
                href='https://drive.google.com/file/d/1NOrvmwkKHPiQL12E4LpM4l-9f3GXvK-x/view?usp=sharing'
                target='_blank'
              >
                {' '}
                Resume{' '}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
