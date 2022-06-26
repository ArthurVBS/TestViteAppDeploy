import { Route, Routes } from 'react-router-dom'

import Contact from './pages/contact'
import Home from './pages/home'

const PATH = 'TestViteAppDeploy' // vite.config.ts  

const MyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={PATH + '/'} element={<Home />} />
      <Route path={PATH + '/contact'} element={<Contact />} />
    </Routes>
  )
}

export default MyRoutes
