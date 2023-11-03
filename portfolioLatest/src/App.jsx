import Navbar from './Components/Navbar'
import './Style.scss'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'

function App () {
  return (
    <div className='appContainer'>
      <div className="app">
        <Navbar />
        {/* <Home /> */}
        {/* <Projects /> */}
        <Skills />

      </div>
    </div>
  )
}

export default App
