import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './App.css'
import Navbar from './components/navbar'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  )
}

export default App
