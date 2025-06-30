import './App.css'; 
import Portfolio from './components/Portfolio';
import SpaceBackground from './components/SpaceCompoent';
import Header from './components/Header';
import RocketAnimation from './components/RocketAnimation';
import Skills from './components/Skills';
import Hero from './components/Hero';
export default function App() {

  return (
    <>
    <div className='overflow-hidden'>
      <Header/>
    <SpaceBackground/>
    <Hero/>
    <Skills/>
    </div>
    
    </>

  );
}
