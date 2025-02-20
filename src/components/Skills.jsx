import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiEclipseide } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { GoTools } from "react-icons/go";
const Skills = () => {
  return (
    <div className=' flex items-center flex-col py-8 sm:py-12 ' id='skills'>
      <h1 className='text-4xl sm:text-5xl text-white font-extrabold font-sans'>Skills</h1>
      <p className='text-gray-400 text-center text-lg sm:text-xl my-4 px-6'>Here are some of my skills on wwhich i have learnt.</p>
      <div className='flex flex-col xl:flex-row gap-7 my-4 mx-2 '>
      <div className='relative bg-[#171721] box px-10 sm:px-20 py-7 sm:py-14 rounded-lg mx-2'>
          <h2 className='text-white text-3xl text-center mb-7 font-bold'>Fullstack</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-7'>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <FaHtml5 className='size-6' /> <p className='text-lg sm:text-xl'>HTML</p>
            </div>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <FaCss3  className='size-6'  /> <p className='text-lg sm:text-xl'>CSS</p>
            </div>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <FaJs className='size-6'  /> <p className='text-sm sm:text-xl'>Javascript</p>
            </div>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <FaBootstrap className='size-6'  /> <p className='text-sm sm:text-xl'>Bootstarp</p>
            </div>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <RiJavaLine className='size-6'  /> <p className='text-lg sm:text-xl'>Java</p>
            </div>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <SiMysql className='size-6'  /> <p className='text-lg sm:text-xl'>Mysql</p>
            </div>
          </div>
        </div>

        <div className='relative bg-[#171721] box  px-10 sm:px-20 py-7 sm:py-14 rounded-lg mx-2'>
          <h2 className='text-white text-3xl text-center mb-5 font-bold'>Others</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 '>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <FaGitAlt className='size-6'  /> <p className='text-lg sm:text-xl'>Git</p>
            </div>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <FaGithub  className='size-6' /> <p className='text-lg sm:text-xl'>GitHub</p>
            </div>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <SiEclipseide className='size-6'  /> <p className='text-lg sm:text-xl'>Eclipse</p>
            </div>

            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <VscVscode className='size-6'  /> <p className='text-lg sm:text-xl'>VScode</p>
            </div>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <IoLogoVercel  className='size-6' /> <p className='text-lg sm:text-xl'>Vercel</p>
            </div>
            <div className='flex gap-2 items-center justify-center   text-gray-300 border-1 px-3 py-2 rounded-2xl outline-0'>
              <GoTools className='size-6'  /> <p className='text-lg sm:text-xl'>Devtools</p>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Skills
