import React from 'react'
import { Link } from 'react-router-dom'

const PATH = 'TestViteAppDeploy' // vite.config.ts 

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to={PATH + '/'}>HOME</Link>
      <Link to={PATH + '/contact'}>CONTACT</Link>
    </nav>
  )
}

export default Navbar