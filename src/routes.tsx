import { Route, Routes } from 'react-router-dom'

import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'

const PATH = 'TestViteAppDeploy' // vite.config.ts  

const MyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={PATH + '/'} element={<Home />} />
      <Route path={PATH + '/contact'} element={<Contact />} />
      <Route path={PATH + '/about'} element={<About />} />
    </Routes>
  )
}

export default MyRoutes
