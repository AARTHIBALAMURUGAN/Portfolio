import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

const Visionary = () => {
  return (
    <div className="px-6 py-10 text-white" >
      {/* Section Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center">Experience</h1>
      <h3 className="text-gray-300 text-lg text-center mt-4">
        Launching My Career: A Fresh Perspective on Full-stack Engineering
      </h3>

      {/* Timeline */}
      <div className=" max-w-4xl mx-auto my-6">
        <VerticalTimeline>
          {/* Experience 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1f1f2e", color: "#fff", borderRadius: "10px", border: "1px solid #6200ea" }}
            contentArrowStyle={{ borderRight: "7px solid #6200ea" }}
            
            iconStyle={{ background: "#6200ea", color: "#fff" ,  }}
            
          >
            <h4 className="font-semibold text-lg">Web Developer</h4>
            <h5 className="text-gray-400 text-sm">Passionated</h5>
            <p className="text-gray-300 text-sm mt-2">
              As a Web Developer, I specialized in crafting responsive, user-friendly interfaces using Javascript and Bootstrap.
            </p>
          </VerticalTimelineElement>

          {/* Experience 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1f1f2e", color: "#fff", borderRadius: "10px", border: "1px solid #6200ea" }}
            contentArrowStyle={{ borderRight: "7px solid #6200ea" }}
            iconStyle={{ background: "#6200ea", color: "#fff" }}
            
          >
            <h4 className="font-semibold text-lg">Reason to hire me</h4>
            <h5 className="text-gray-400 text-sm">what sets Me apart.</h5>
            <p className="text-gray-300 text-sm mt-2">
                Aspiring Web Developer passionate about crafting exceptional user experiences.I bring fresh perspectives,boundaries ambition and unconventional thinking to every project.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Visionary;
