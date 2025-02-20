import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-10 text-center">
      {/* Shape Divider */}
      <div className="relative w-full overflow-hidden leading-none">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="relative block w-[calc(100%+1.3px)] h-[79px]"
  >
    <path
      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
      opacity=".25"
      className="fill-white"
    ></path>
    <path
      d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
      opacity=".5"
      className="fill-white"
    ></path>
    <path
      d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
      className="fill-white"
    ></path>
  </svg>
</div>


      {/* Footer Content */}
      <div className="flex flex-col items-center gap-6 my-7">
        <h4 className="text-4xl  mb-2 font-extrabold">Aarthi H</h4>

        <div className="flex space-x-4  mb-4 text-sm">
          <p className="hover:text-violet-700 text-md transition-all duration-200"><a href="#about">About</a></p>
          <p className="hover:text-violet-700 text-md  transition-all duration-200"><a href="#skills">Skills</a></p>
          <p className="hover:text-violet-700 text-md transition-all duration-200"><a href="#projects">Projects</a></p>
          <p className="hover:text-violet-700 text-md transition-all duration-200"><a href="#education">Education</a></p>
          <p className="hover:text-violet-700 text-md transition-all duration-200"><a href="#contact">Contact</a></p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl mb-4">
          <a href="tel:8667716370" className="hover:text-gray-400">
            <FaPhoneAlt className="text-3xl" />
          </a>
          <a href="mailto:aarthib875@gmail.com" className="hover:text-gray-400">
            <IoMdMail className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/aarthi-b-540358282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="https://wa.me/918667716370" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <IoLogoWhatsapp className="text-3xl" />
          </a>
          <a href="https://github.com/AARTHIBALAMURUGAN" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub className="text-3xl" />
          </a>
        </div>

        <p className="text-md text-gray-400">Elevating the Digital Experience!</p>
      </div>
    </footer>
  );
};

export default Footer;
