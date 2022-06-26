import React from 'react'
import { Link } from 'react-router-dom'

const PATH = 'TestViteAppDeploy' // vite.config.ts 

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to={PATH + '/'}>HOME</Link>
      <span>|</span>
      <Link to={PATH + '/contact'}>CONTACT</Link>
      <span>|</span>
      <Link to={PATH + '/about'}>ABOUT</Link>
    </nav>
  )
}

export default Navbar