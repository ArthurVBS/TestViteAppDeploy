import logo from './logo.svg'
import './App.css'
import Count from './components/count'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Count />
      </header>
    </div>
  )
}

export default App
