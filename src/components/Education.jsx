import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "Alpha Academy",
    subtitle: "Full-Stack Development Mastery",
    year: "2023",
    desc: "With a comprehensive Full-Stack development course under my belt, I've cultivated expertise in React.js and Express.js. This journey has empowered me to craft responsive websites and dynamic applications.",
  },
  {
    title: "Sengunthar Engineering College",
    subtitle: "B.E - Computer Science & Engineering",
    year: "2021 - 2025",
    grade: "9.1 CGPA",
    desc: "As a computer engineering student, I possess strong problem-solving and precision skills. Combining this foundation with my passion for technology, I aim to build innovative solutions.",
  },
  {
    title: "Everest mariappa nadar Higher Secondary School",
    subtitle: "HSC - XII (CS-MATHS)",
    year: "2019 - 2021",
    grade: "92%",
    desc: "I've embraced a dynamic academic journey that fostered critical thinking and adaptability. My dedication to learning has shaped my approach to technology.",
  },
];

const Education = () => {
  return (
    <div className="px-3 py-10 sm:py-15 text-white flex justify-center">
      
      <div className="w-full max-w-lg mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl font-extrabold sm:text-5xl  text-center">Education</h1>
        <h3 className="text-gray-300 text-sm text-center my-3">
          My educational journey has shaped my skills and knowledge.
        </h3>

        {/* Timeline */}
        <VerticalTimeline layout="1-column" lineColor="#6200ea" className="gap-2">
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#1f1f2e",
                color: "#fff",
                borderRadius: "8px",
                border: "1px solid #6200ea",
                padding: "10px", // Reduced padding
                marginBottom: "10px", // Less vertical gap
              }}
              contentArrowStyle={{ borderRight: "6px solid #6200ea" }}
              iconStyle={{ 
                background: "#6200ea", 
                color: "#fff", 
                width: "30px",  // Smaller icon
                height: "30px", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              
            >
              <h4 className="font-semibold text-base leading-tight mb-2">{edu.title}</h4>
              <h5 className="text-gray-400 text-xs leading-none">{edu.subtitle}</h5>
              <p className="text-gray-500 text-xs leading-none mb-1">{edu.year}</p>
              {edu.grade && (
                <p className="text-xs font-bold text-gray-300 leading-none mb-1">
                  Grade: {edu.grade}
                </p>
              )}
              <p className="text-gray-300 text-sm leading-tight">{edu.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
