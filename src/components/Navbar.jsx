import React, { useState } from 'react'
import { RiMenu4Line } from 'react-icons/ri'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      {/* Fixed Navbar with Glassmorphism */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-lg  " >
        <div className="flex justify-between items-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] py-4">
          <p className="text-2xl text-white font-bold">Devfolio</p>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-x-6 text-white">
            <p className="hover:text-violet-700 transition-all duration-200"><a href="#about">About</a></p>
            <p className="hover:text-violet-700  transition-all duration-200"><a href="#skills">Skills</a></p>
            <p className="hover:text-violet-700 transition-all duration-200"><a href="#projects">Projects</a></p>
            <p className="hover:text-violet-700 transition-all duration-200"><a href="#education">Education</a></p>
            <p className="hover:text-violet-700 transition-all duration-200"><a href="#contact">Contact</a></p>
          </div>


          <button className="hidden md:block border-2 border-violet-500 rounded-2xl px-3 py-1 text-white">
            <a href="https://github.com/dashboard">GitHub</a>
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setToggle(!toggle)} className="md:hidden text-white">
            <RiMenu4Line className="size-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide from Left with Glass Effect */}
      <div
        className={`fixed top-0 h-screen w-[75%] sm:w-[30%] bg-white/10 backdrop-blur-md shadow-2xl py-10 text-white transition-all duration-200 ease-in-out ${toggle ? 'left-0' : '-left-full'
          }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={() => setToggle(false)}
        >
          ✖
        </button>

        <div className="flex flex-col gap-4 text-left mt-10 pl-7 z-50">
            <p onClick={()=>setToggle(false)} className="text-lg hover:text-violet-700 transition-all duration-200"><a href="#about">About</a></p>
            <p onClick={()=>setToggle(false)} className="text-lg hover:text-violet-700  transition-all duration-200"><a href="#skills">Skills</a></p>
            <p onClick={()=>setToggle(false)} className="text-lg hover:text-violet-700 transition-all duration-200"><a href="#projects">Projects</a></p>
            <p onClick={()=>setToggle(false)} className="text-lg hover:text-violet-700 transition-all duration-200"><a href="#education">Education</a></p>
            <p onClick={()=>setToggle(false)} className="text-lg hover:text-violet-700 transition-all duration-200"><a href="#contact">Contact</a></p>
          <button className="mt-4 bg-violet-800 px-4 py-2 rounded-xl w-fit"><a href="https://github.com/dashboard">GitHub</a></button>
        </div>
      </div>

      {/* Add padding to prevent content overlap */}
      <div className="pt-[50px]"></div>
    </>
  )
}

export default Navbar
