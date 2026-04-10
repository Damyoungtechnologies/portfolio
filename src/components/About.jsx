import React from "react";
import AboutTabs from "./AboutTabs";
import { my_portrait } from "../assets";

const About = () => {
  return (
    <section id="about" className="about py-24 bg-white dark:bg-slate-950">
      <div className="w-[90%] mx-auto">
        <div className="about-container flex flex-col lg:flex-row items-center lg:items-start gap-16">
          <div className="about-image w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-transform dark:bg-blue-400 dark:opacity-5"></div>
              <img
                src={my_portrait}
                alt="Samuel Ayodeji Image"
                className="relative z-10 w-80 md:w-[450px] object-cover rounded-2xl shadow-2xl shadow-blue-100 dark:shadow-none dark:border dark:border-white/5"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <AboutTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
