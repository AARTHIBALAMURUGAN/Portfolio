import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import imgs from '../assets/Myself.jpg';

const Hero = () => {
    return (
        <div className='max-w-full py-4 lg:py-10 flex flex-col-reverse gap-10 lg:gap-20 lg:flex-row'>
            <div className='max-w-full lg:w-[50%] flex justify-center items-center'>
                <div className='flex flex-col'>
                    <h1 className='text-[40px] text-center -my-1 sm:text-[50px] lg:text-left'>Hi, I am</h1>
                    <h1 className='text-[40px] text-center sm:text-[50px] lg:text-left'>Aarthi H</h1>

                    {/* Animated Typing Effect */}
                    <h2 className='text-[25px] my-2 sm:text-[32px] text-center lg:text-left'>
                        I am a <span className='text-violet-500 sm:text-[32px]'>
                            <Typewriter
                                words={["Frontend Developer" , "Web Developer"]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>

                    <p className='py-3 pl-1 text-center text-lg sm:text-[20px] lg:text-left'>
                        A skilled Web developer with a strong portfolio, passionate about staying updated on frontend tech.
                        Collaborative and committed to quality, you thrive in dynamic teams. Eager to contribute creativity and bring innovative ideas to life.
                    </p>
                             <button
    className="relative my-4 mx-auto px-5 py-2 text-xl w-fit text-white lg:mx-0
        bg-gradient-to-r from-[#EC37D0] via-[#D92B2B] to-[#FFAA0D] 
        bg-[length:400%] rounded-full transition-all duration-500 
        hover:animate-gradientMove 
        before:content-[''] before:absolute before:inset-0 
        before:rounded-full before:bg-gradient-to-r before:opacity-0 
        before:transition-opacity before:duration-500 hover:before:opacity-80 
        hover:before:blur-[25px]"
    onClick={() => {
        const link = document.createElement("a");
        link.href = "/HireMe.pdf"; // Ensure this file is in your public folder
        link.download = "Aarthi_B_Resume.pdf"; // The name it will be saved as
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }}
>
    Check Resume
</button>
                </div>
            </div>
            <div className='w-full lg:w-[50%] flex justify-center items-center'>
                <img src={imgs} id='logo' className='w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-[100%] border-2 border-violet-600' alt="" />
            </div>
        </div>
    );
}

export default Hero;
