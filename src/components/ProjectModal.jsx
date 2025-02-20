import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#121212] p-6 rounded-xl w-[90%] md:w-[600px] h-fit shadow-lg relative py-9">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-300 hover:text-gray-100"
        >
          ✕
        </button>
        <div>
          <img src={project.img} className="rounded-3xl max-h-[300px]" />
        </div>
        {/* Project Title */}
        <h2 className="text-xl font-bold text-white my-2">{project.title}</h2>
        <p className="text-gray-400 text-sm mb-3">{project.year}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-purple-800 text-white text-xs px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300">{project.description}</p>
        <div className="flex mt-4 gap-2">
          <a href={project.code}><button className="px-4 py-1 bg-gray-600">View code</button></a>
          <a href={project.demo}><button className="px-4 py-1 bg-violet-800">Live app</button></a>
        </div>
      </div>
     
    </div>
  );
};

export default ProjectModal;
