import React from "react";

import { FaHtml5, FaCss3, FaJs, FaGoogle, FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";

import {
  RiJavaLine,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiSpringboot,
  SiJsonwebtokens,
  SiIntellijidea,
  SiGooglegemini,
  SiRender,
  SiApachemaven,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { GoTools } from "react-icons/go";

const Skills = () => {
  return (
    <div
      className="flex items-center flex-col py-8 sm:py-12"
      id="skills"
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl text-white font-extrabold font-sans">
        Skills
      </h1>

      <p className="text-gray-400 text-center text-lg sm:text-xl my-4 px-6">
        Here are some of my skills which I have learnt.
      </p>

      {/* Main Sections */}
      <div className="flex flex-col xl:flex-row gap-7 my-4 mx-2 w-full justify-center">

        {/* ================= FULLSTACK ================= */}
        <div className="relative bg-[#171721] box px-6 sm:px-10 py-7 sm:py-14 rounded-lg mx-2">

          <h2 className="text-white text-3xl text-center mb-7 font-bold">
            Fullstack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6">

            {/* HTML */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <FaHtml5 className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">HTML</p>
            </div>

            {/* CSS */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <FaCss3 className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">CSS</p>
            </div>

            {/* JavaScript */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <FaJs className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">JavaScript</p>
            </div>

            {/* Tailwind CSS */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <RiTailwindCssFill className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl text-center">
                Tailwind CSS
              </p>
            </div>

            {/* React JS */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <RiReactjsFill className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">React JS</p>
            </div>

            {/* Next JS */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <RiNextjsFill className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Next JS</p>
            </div>

            {/* Node JS */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <RiNodejsFill className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Node JS</p>
            </div>

            {/* Express JS */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiExpress className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Express JS</p>
            </div>

            {/* Java */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <RiJavaLine className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Java</p>
            </div>

            {/* Spring Boot */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiSpringboot className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl text-center">
                Spring Boot
              </p>
            </div>

            {/* REST APIs */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <TbApi className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl text-center">
                REST APIs
              </p>
            </div>

            {/* MySQL */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiMysql className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">MySQL</p>
            </div>

            {/* MongoDB */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiMongodb className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">MongoDB</p>
            </div>

          </div>
        </div>


        {/* ================= OTHERS ================= */}
        <div className="relative bg-[#171721] box px-6 sm:px-10 py-7 sm:py-14 rounded-lg mx-2">

          <h2 className="text-white text-3xl text-center mb-7 font-bold">
            Others
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6">

            {/* Git */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <FaGitAlt className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Git</p>
            </div>

            {/* GitHub */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <FaGithub className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">GitHub</p>
            </div>

            {/* VS Code */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <VscVscode className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">VS Code</p>
            </div>

            {/* Vercel */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <IoLogoVercel className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Vercel</p>
            </div>

            {/* Render */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiRender className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Render</p>
            </div>

            {/* DevTools */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <GoTools className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">DevTools</p>
            </div>

            {/* JWT */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiJsonwebtokens className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">JWT</p>
            </div>

            {/* Bcrypt */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <MdLock className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Bcrypt</p>
            </div>

            {/* Google OAuth */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <FaGoogle className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl text-center">
                Google OAuth 2.0
              </p>
            </div>

            {/* IntelliJ IDEA */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiIntellijidea className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl text-center">
                IntelliJ IDEA
              </p>
            </div>

            {/* Maven */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiApachemaven className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Maven</p>
            </div>

            {/* Postman */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiPostman className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl">Postman</p>
            </div>

            {/* Gemini AI API */}
            <div className="flex gap-2 items-center justify-center text-gray-300 border px-4 py-3 rounded-2xl w-full min-w-0">
              <SiGooglegemini className="size-6 shrink-0" />
              <p className="text-lg sm:text-xl text-center">
                Gemini AI API
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;