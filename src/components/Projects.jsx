import React, { useState } from "react";
import Cart from "./Cart";
import ProjectModal from "./ProjectModal";
import COOK from '../assets/COOKLEASE.png'
import shopping from '../assets/SHOPPING LIST.png'

import recipe from '../assets/recipe.png'
import expense from '../assets/expense.png'


const projects = [ 
 
   {
    id: 1,
    title: "CookLease",
    year : 2025,
    img: COOK,
    category: "web-app",
    tags: ["REACT JS","NODE JS","EXPRESS JS","MONGODB","GOOGLE AUTH","JWT","REACT RECHARTS","REST API's"],
    description: "Full-stack rental platform for managing product listings, orders, and returns.Implemented secure authentication and built REST APIs with an analytics dashboard.",
    code: "https://github.com/AARTHIBALAMURUGAN/CookLease",
    demo: "https://cook-lease-xaxt.vercel.app"
  },

 
   {
    id: 2,
    title: "Expense Splitter",
    year : 2025,
    img: expense,
    category: "web-app",
    tags: ["REACT JS","NODE JS","EXPRESS JS","MONGODB","JWT"],
    description: "Developed a full-stack Expense Splitter using Next.js, Node.js, Express.js, and MongoDB with JWT authentication.Implemented expense tracking and a who-owes-whom settlement engine with CRUD, search, filtering, and sorting.",
    code: "https://github.com/AARTHIBALAMURUGAN/ExpenseSplitter",
    demo: "https://expense-splitter-s6n8.vercel.app/login"
  },
  {
    id: 3,
    title: "Shopping-List",
    year : 2024,
    img: shopping,
    category: "web-app",
    tags: ["HTML","CSS","JAVASCRIPT"],
    description: "A Functional Crud apllication where user can create , read ,update ,delete operation on their Notes. Track all the Notes and can modify",
    code  : "https://github.com/AARTHIBALAMURUGAN/shopping-list",
    demo : "https://statuesque-profiterole-d81cbd.netlify.app"
  },
  {
    id: 4,
    title: "RECIPE APP",
    year : 2026,
    img: recipe,
    category: "website",
    tags: ["REACT","API Integration"],
    description: "Web application to fetch and display recipes from a third-party API.Includes search and filter features with a responsive user interface.",
    code : "https://github.com/AARTHIBALAMURUGAN/RECIPE-APP",
    demo : "https://recipe-app-sandy-pi.vercel.app"
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
            className={` px-2 sm:px-4 py-1 sm:py-2 text-sm font-medium border transition-all duration-300 ${selectedCategory === category ? "bg-purple-500 text-white border-purple-700" : "bg-gray-800 text-[#9c7ad8] border-gray-600"
              } `}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

     
      <div className="flex  flex-wrap justify-center gap-4 sm:gap-y-10 sm:gap-x-6 ">
        {filterProjects.map(project => (
          <div key={project.id} onClick={() => setSelectedProject(project)} >
            <Cart title={project.title} tags={project.tags} desc={project.description} img={project.img} year={project.year}   />
          </div>
        ))}
      </div>

    
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default Projects;

