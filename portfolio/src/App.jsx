import Header from './components/Header'
import Hero from './components/Hero'
import SpaceBackground from './components/SpaceCompoent'
import './App.css'
import Skills from './components/Skills'

function App() {


  return (
    <>
    
    <div className='hero-container'>

      <SpaceBackground/>
      <Header/>
      <Hero/>
      <Skills/>

    </div>
      
    </>
  )
}

export default App
