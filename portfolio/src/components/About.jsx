import React from "react";
import AboutTabs from "./AboutTabs";
import { my_portrait } from "../assets";

const About = () => {
  return (
    <section id="about" className="about ">
      <div className="">
        <div className="about-container w-[90%] mx-auto">
          <div className="about-image flex justify-center">
            <img
              src={my_portrait}
              alt="About me"
              className="!w-full !h-[80vh] !object-contain"
            />
          </div>
          <AboutTabs />
        </div>
      </div>
    </section>
  );
};

export default About;
