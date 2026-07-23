import React from "react";
import Typewriter from "typewriter-effect";
import { cv } from "../assets";
// import "../App.css";
// import { herobackground } from "../assets";
const Hero = () => {
  return (
    <section id="home" className="hero min-h-[90vh] flex items-center pt-20 overflow-hidden relative">
      {/* Background Decorative Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="container w-[90%] mx-auto relative z-10">
        <div className="hero-content max-w-[800px] animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <span className="text-blue-300 font-bold text-sm tracking-widest uppercase">
              🚀 Welcome to my world
            </span>
          </div>
          
          <h1 className="text-[3.5rem] md:text-[5rem] font-extrabold leading-tight mb-4 text-white">
            I am <span className="gradient-text !from-blue-400 !to-blue-200">Samuel Ayodeji</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold flex items-center gap-3 text-blue-100 mb-8">
            Building 
            <span className="text-white drop-shadow-lg">
              <Typewriter
                options={{
                  strings: ["Innovation", "Science", "Technology"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl !text-white max-w-[600px] leading-relaxed mb-10 opacity-90">
            Passionate polymath specializing in high-impact solutions at the intersection of science and technology. 
            Turning complex problems into elegant realities.
          </p>
          
          <div className="flex flex-row gap-3 sm:gap-5 w-full max-w-[100vw] overflow-hidden">
            <a
              href={cv}
              download
              className="px-4 sm:px-8 py-3 sm:py-4 bg-[#0779e4] !text-white rounded-xl font-bold text-[10px] sm:text-sm uppercase tracking-wider shadow-2xl shadow-blue-500/20 hover:bg-[#0566c5] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1 sm:gap-2 group border border-white/20 whitespace-nowrap flex-1"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="group-hover:translate-y-1 transition-transform !text-white sm:w-5 sm:h-5"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m7-7-7 7-7-7"
                />
              </svg>
            </a>
            
            <a
              href="#services"
              className="px-4 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-lg !text-white border border-white/30 rounded-xl font-bold text-[10px] sm:text-sm uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-1 sm:gap-2 group whitespace-nowrap flex-1"
            >
              Explore Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 18 6-6-6-6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
