import React, { useState } from "react";
import Cart from "./Cart";
import ProjectModal from "./ProjectModal";
import ecom from '../assets/Amazon.png'

import movie from '../assets/Todo.png'

import weather from '../assets/Form.png'


const projects = [ {
    id: 1,
    title: "Amazon-clone",
    year : 2025,
    img: ecom,
    category: "website",
    tags: ["HTML","CSS","JAVASCRIPT","BOOTSTRAP"],
    description: "A fully responsive eCommerce website with seamless interacticity, and a modern UI/UX experience with high quality  products with offers",
    code: "https://github.com/AARTHIBALAMURUGAN/Amazon.clone",
    demo: "https://amazon-clone-uvhm.vercel.app/"
  },
  {
    id: 2,
    title: "Todo-List",
    year : 2024,
    img: movie,
    category: "web-app",
    tags: ["HTML","CSS","JAVASCRIPT","BOOTSTRAP"],
    description: "A Functional Crud apllication where user can create , read ,update ,delete operation on their Notes. Track all the Notes and can modify",
    code  : "https://github.com/AARTHIBALAMURUGAN/to-do-list",
    demo : "https://aarthibalamurugan.github.io/to-do-list/to.html"
  },
  {
    id: 3,
    title: "SignUp & Login",
    year : 2024,
    img: weather,
    category: "web-app",
    tags: ["HTML","CSS","JAVASCRIPT","BOOTSTRAP"],
    description: "Its responsive interactive Signup and Login form where user can be authenticated and Authorized with Mysql database",
    code : "https://github.com/AARTHIBALAMURUGAN/form",
    demo : "https://aarthibalamurugan.github.io/form/meta.html"
  },
 
];


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterProjects = selectedCategory === "all"
    ? projects
    : projects.filter(pro => pro.category === selectedCategory);

  return (
    <div className="py-14 text-white" >
      
      <h1 className="text-center text-4xl sm:text-5xl mb-3 font-extrabold">Projects</h1>
      <p className="text-gray-300 text-center px-2">I have worked on a wide range of projects, from websites to web apps those are,</p>

      {/* Button Group */}
      <div className="flex justify-center my-6">
        {["all", "website", "web-app"].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 sm:px-4 py-1 sm:py-2 text-sm font-medium border transition-all duration-300 ${selectedCategory === category ? "bg-purple-500 text-white border-purple-700" : "bg-gray-800 text-[#9c7ad8] border-gray-600"
              } `}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Centering Cards */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-y-10 sm:gap-x-6">
        {filterProjects.map(project => (
          <div key={project.id} onClick={() => setSelectedProject(project)} >
            <Cart title={project.title} tags={project.tags} desc={project.description} img={project.img} year={project.year}   />
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default Projects;
