"use client";
import React from "react";

import { useState } from "react";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="about-content">
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <button
          className={`about-tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
            backgroundColor: activeTab === "about" ? "#0779e4" : "white",
            color: activeTab === "about" ? "white" : "#666",
          }}
        >
          ABOUT ME
        </button>
        {/* <button
          className={`about-tab ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
            backgroundColor: activeTab === "skills" ? "#0779e4" : "white",
            color: activeTab === "skills" ? "white" : "#666",
          }}
        >
          SKILLS
        </button> */}
        <button
          className={`about-tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
            backgroundColor: activeTab === "experience" ? "#0779e4" : "white",
            color: activeTab === "experience" ? "white" : "#666",
          }}
        >
          EXPERIENCE
        </button>
      </div>

      {activeTab === "about" && (
        <>
          <div style={{ marginBottom: "40px" }}>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#0779E4",
              }}
            >
              My Story
            </h1>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              I am a first-class graduate of the University of Nigeria, Nsukka.
              I am a double honors holder in Plant Science and Biotechnology/
              Zoology and Environmental Biology. I am a leadership trainer and a
              multiple-award winning scholar, some of which include the
              prestigious international{" "}
              <b>Royal African Young Leadership Forum Award</b>.
            </p>
          </div>
          <div>
            <h1
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#0779E4",
              }}
            >
              I have been into web development since I was 23 years old.
            </h1>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              I am a Researcher, a software engineer and a cybersecurity
              personnel in training, among many other things.
            </p>
          </div>
        </>
      )}

      {/* {activeTab === "skills" && (
        <>
          <div className="">
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#0779E4",
              }}
            >
              My Skills
            </h1>
            <p
              style={{ color: "#666", lineHeight: "1.6", marginBottom: "30px" }}
            >
              I've developed a diverse set of skills throughout my career.
              Here's a breakdown of my technical proficiencies:
            </p>

            <div style={{ marginBottom: "25px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontWeight: "500" }}>HTML/CSS</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div style={{ marginBottom: "25px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontWeight: "500" }}>JavaScript</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div style={{ marginBottom: "25px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontWeight: "500" }}>React</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div style={{ marginBottom: "25px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontWeight: "500" }}>UI/UX Design</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div style={{ marginBottom: "25px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontWeight: "500" }}>Node.js</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </>
      )} */}

      {activeTab === "experience" && (
        <div className="experience-content">
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#0779E4",
            }}
          >
            Work Experience
          </h1>
          <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
            My professional journey has equipped me with valuable experience
            across various domains:
          </p>

          <div
            style={{
              marginBottom: "30px",
              borderLeft: "4px solid #0779e4",
              paddingLeft: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#0779E4",
              }}
            >
              Senior Web Developer
            </h2>
            <p style={{ color: "#0779e4", marginBottom: "10px" }}>
              2024 - Present
            </p>
            <p style={{ color: "#666" }}>
              Leading development of enterprise web applications using React and
              Python.
            </p>
          </div>

          <div
            style={{
              marginBottom: "30px",
              borderLeft: "4px solid #0779e4",
              paddingLeft: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#0779E4",
              }}
            >
              UI/UX Designer
            </h2>
            <p style={{ color: "#0779e4", marginBottom: "10px" }}>
              2024 - Present
            </p>
            <p style={{ color: "#666" }}>
              Designed user interfaces for mobile and web applications.
              Conducted user research and usability testing to improve product
              experiences.
            </p>
          </div>

          <div
            style={{
              marginBottom: "30px",
              borderLeft: "4px solid #0779e4",
              paddingLeft: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#0779E4",
              }}
            >
              Frontend Developer
            </h2>
            <p style={{ color: "#0779e4", marginBottom: "10px" }}>
              2021 - Present
            </p>
            <p style={{ color: "#666" }}>
              Developed responsive websites and web applications using HTML,
              CSS, and JavaScript. Collaborated with designers to implement
              pixel-perfect interfaces.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutTabs;
