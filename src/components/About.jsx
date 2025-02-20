import React, { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'

import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Visionary from './Visionary'
import {RiMenu4Line} from 'react-icons/ri'
import Navbar from './Navbar'
import Hero from './Hero'

const About = () => {
  const [toggle,setToggle ]= useState(false) 
  return (
    <div className='py-5  text-white font-semibold'>
       
       <Hero/>

    </div>
  )
}

export default About
