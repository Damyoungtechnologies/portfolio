import React from "react";

import { useState } from "react";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="about-content">
      <span className="section-label">Biography</span>
      <h1 className="gradient-text font-extrabold mb-8 dark:!from-blue-400 dark:!to-blue-200" style={{ fontSize: "2.5rem" }}>
        Discover Who I Am
      </h1>

      <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {["about", "skills", "experience"].map((tab) => (
          <button
            key={tab}
            className={`px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
              activeTab === tab 
                ? "!bg-[#0779e4] !text-white shadow-lg shadow-blue-500/20 translate-y-[-2px]" 
                : "!bg-slate-100 !text-slate-500 hover:!bg-slate-200 dark:!bg-slate-800 dark:!text-slate-400 dark:hover:!bg-slate-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="glass-card p-1 dark:!bg-slate-900/40">
        {activeTab === "about" && (
          <div className="p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 animate-fade-in">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg text-justify whitespace-pre-line">
              <span className="text-[#0779e4] dark:text-blue-400 font-bold">Samuel Adedamola Ayodeji</span> is a Nigerian technologist, software engineer, ethical hacker, and bioscience researcher. He is the Founder/CEO of <span className="font-semibold text-slate-900 dark:text-white">Theralink</span>, where he is building accessible healthcare solutions through technology. He earned First Class Honors from the University of Nigeria, graduating as Best Student in both his faculty and department with a 4.80/5.00 CGPA.
              {"\n"}
              Samuel has built multiple web applications, led product and design teams, and serves as a web development and cybersecurity instructor, mentoring the next generation of technologists. He received the Royal African Young Leadership Forum Award and was nominated for the 2024 Ten Outstanding Young Persons of Nigeria Award.
              {"\n"}
              In 2025, he emerged as a first runner-up in the <span className="text-[#0779e4] dark:text-blue-400 font-medium italic">SDG4KIDS Animation Contest</span> across 17 African countries. He also holds multiple certifications across bioscience, software engineering, and the cyber-security landscape.
            </p>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 animate-fade-in">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { label: "Web Development", level: "95%" },
                 { label: "Software Engineering", level: "90%" },
                 { label: "Cyber Security", level: "85%" },
                 { label: "Data Science", level: "80%" },
                 { label: "UI/UX Design", level: "90%" },
                 { label: "Video Editing", level: "85%" }
               ].map((skill) => (
                 <div key={skill.label}>
                   <div className="flex justify-between mb-2">
                     <span className="font-bold text-slate-700 dark:text-slate-200">{skill.label}</span>
                     <span className="text-[#0779e4] dark:text-blue-400 font-bold">{skill.level}</span>
                   </div>
                   <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-[#0779e4] rounded-full transition-all duration-1000" style={{ width: skill.level }}></div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 animate-fade-in flex flex-col gap-10">
            {[
              {
                title: "Founder & CEO",
                company: "Theralink",
                period: "2026 - Present",
                desc: "Transforming healthcare through innovation."
              },
              {
                title: "Cybersecurity & Web Instructor",
                company: "Anetcom Technologies",
                period: "2024 - 2026",
                desc: "Mentoring over 100+ students in modern web technologies and ethical hacking practices."
              },
              {
                title: "Bioscience Researcher",
                company: "UNN",
                period: "2017 - Present",
                desc: "Conducting data-driven research in biotechnology with first-class academic excellence."
              }
            ].map((exp, i) => (
              <div key={i} className="relative pl-10 border-l-2 border-blue-100 dark:border-slate-800">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0779e4] shadow-lg shadow-blue-500/20"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#0779e4] dark:text-blue-400 font-bold text-sm uppercase tracking-wider">{exp.company}</span>
                  <span className="text-slate-400 dark:text-slate-500 font-medium text-xs">• {exp.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutTabs;
