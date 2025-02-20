import React from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Visionary from './components/Visionary'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <> 
      <div className='max-w-full  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] xl:px-[12vw] bg-radial from-[#020024] to-[#09092a]'id='about'>
        <Navbar/>
        <About />
      </div>
      <div className='max-w-full bg-gradient-to-t from-[#30cfd0] to-[#330867]' id='skills'>
         <Skills />
         <Visionary/>
      </div>
      <div className='max-w-full bg-[#1d1d29] ' id='projects'>
        <Projects/>
      </div> 
      <div className='max-w-full bg-black ' id='education'>
        <Education/>
      </div>
      <div className='max-w-full bg-black text-white' id='contact'>
        <Contact/>
      </div>
      <div className='max-w-full bg-black text-white '>
        <Footer/>
      </div>
    </>
  )
}

export default App
