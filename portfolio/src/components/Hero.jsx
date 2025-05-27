import React from "react";
// import "../App.css";
// import { herobackground } from "../assets";
const Hero = () => {
  return (
    <section id="" className="hero">
      <div className="h-full flex items-center  lg:mt-32 lg:ml-8">
        <div className="hero-content">
          <h3 className="there">Hi There!</h3>
          <h1 className="text-[4rem] font-medium text-l md:text-xl lg:text-2xl mt-[15px]">
            I am Samuel Ayodeji
          </h1>
          <h1 className="text-[4rem] font-light">I love Design</h1>
          <p style={{ margin: "30px 0 50px", fontSize: "18px" }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div
            className="action"
            style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
          >
            <a
              href="#contact"
              style={{
                backgroundColor: "#0779e4",
                color: "white",
                padding: "15px 25px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontSize: "14px",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0566c5";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#0779e4";
              }}
            >
              Hire me
              <span style={{ marginLeft: "5px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.079 12.5H5v-1h12.079l-5.792-5.792L12 5l7 7l-7 7l-.713-.708z"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#portfolio"
              style={{
                backgroundColor: "white",
                color: "#0779e4",
                padding: "15px 25px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontSize: "14px",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#f0f0f0";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
              }}
            >
              View Portfolio
              <span style={{ marginLeft: "5px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.079 12.5H5v-1h12.079l-5.792-5.792L12 5l7 7l-7 7l-.713-.708z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
