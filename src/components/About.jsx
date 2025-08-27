import React from "react";
import AboutTabs from "./AboutTabs";
import { my_portrait } from "../assets";

const About = () => {
  return (
    <section id="about" className="about ">
      <div className="">
        <div className="about-container w-[90%] mx-auto flex items-start gap-4 flex-col md:flex-row ">
          <div className="about-image flex items-start justify-center">
            <img
              src={my_portrait}
              alt="About me"
              className="h-[20] w-auto md:h-[50] object-contain rounded-sm"
            />
          </div>
          <AboutTabs />
        </div>
      </div>
    </section>
  );
};

export default About;
