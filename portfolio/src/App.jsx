import Header from './components/Header'
import Hero from './components/Hero'
import SpaceBackground from './components/SpaceCompoent'
import './App.css'
import Skills from './components/Skills/Skills'

function App() {


  return (
    <>
    
    <div className='hero-container'>

      <SpaceBackground/>
      <Header/>
      <div className='-z-10'>
        <Hero/>
      </div>
      
      <Skills/>

    </div>
      
    </>
  )
}

export default App
