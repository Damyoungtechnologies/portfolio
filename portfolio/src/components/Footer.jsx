"use client"
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <div className="footer-container">
          <div>
            <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "15px" }}>Samuel Ayodeji</h1>
            <p style={{ color: "#666", marginBottom: "20px", lineHeight: "1.6" }}>
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="#"
                style={{
                  color: "#1877f2",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                  <path
                    fill="#1877f2"
                    d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  />
                  <path
                    fill="#fff"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                  />
                </svg>
              </a>
              <a
                href="#"
                style={{
                  color: "#c13584",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                  <g fill="none">
                    <rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" />
                    <rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" />
                    <path
                      fill="#fff"
                      d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334z"
                    />
                    <defs>
                      <radialGradient
                        id="skillIconsInstagram0"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fd5" />
                        <stop offset=".1" stopColor="#fd5" />
                        <stop offset=".5" stopColor="#ff543e" />
                        <stop offset="1" stopColor="#c837ab" />
                      </radialGradient>
                      <radialGradient
                        id="skillIconsInstagram1"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3771c8" />
                        <stop offset=".128" stopColor="#3771c8" />
                        <stop offset="1" stopColor="#60f" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </g>
                </svg>
              </a>
              <a
                href="#"
                style={{
                  color: "#1da1f2",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128">
                  <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "15px" }}>Services</h1>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Web Development",
                "Software Engineering",
                "Scratch Programming",
                "Graphic Designing",
                "UI/UX Design",
                "Video Editing",
                "Data Analytics",
                "Copywriting",
                "Cyber Security",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    style={{
                      color: "#666",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "inline-block",
                    }}
                    data-service={service.toLowerCase().replace(/\s+/g, "-")}
                    onMouseOver={(e) => {
                      e.target.style.color = "#0779e4"
                      e.target.style.transform = "translateX(10px)"
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#666"
                      e.target.style.transform = "translateX(0)"
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "15px" }}>Have a Question?</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M21.45 11.227h-1.39a8.18 8.18 0 0 0-7.36-7.36v-1.39a.75.75 0 0 0-1.5 0v1.39a8.17 8.17 0 0 0-7.31 7.36H2.5a.75.75 0 1 0 0 1.5h1.39a8.18 8.18 0 0 0 7.36 7.36v1.39a.75.75 0 0 0 1.5 0v-1.39a8.19 8.19 0 0 0 7.36-7.36h1.39a.75.75 0 1 0 0-1.5zm-9.5 7.39a6.64 6.64 0 1 1 6.64-6.64a6.65 6.65 0 0 1-6.64 6.65z"
                    />
                    <path fill="currentColor" d="M16.48 11.987a4.54 4.54 0 1 1-4.53-4.54a4.53 4.53 0 0 1 4.53 4.54" />
                  </svg>
                </span>
                <a
                  href="https://maps.app.goo.gl/RQkR1vtnq37ofHMb9"
                  style={{ color: "black", textDecoration: "none" }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#0779e4"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "black"
                  }}
                >
                  Osogbo, Osun State, Nigeria
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="currentColor">
                      <path d="M22 12A10 10 0 0 0 12 2v2a8 8 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10" />
                      <path d="M17.543 9.704A6 6 0 0 1 18 12h-1.8A4.2 4.2 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704" />
                    </g>
                  </svg>
                </span>
                <a
                  href="tel:+2348032077924"
                  style={{ color: "black", textDecoration: "none" }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#0779e4"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "black"
                  }}
                >
                  +2348032077924
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.812 11l2.178 2.168a1.1 1.1 0 0 0 1.05.3a1.12 1.12 0 0 0 .809-.74l3.576-10.72A1.118 1.118 0 0 0 11.987.57L1.267 4.147a1.12 1.12 0 0 0-.74.859a1.1 1.1 0 0 0 .3 1l2.737 2.737l-.09 3.466zM13.106.79L3.564 8.742"
                      strokeWidth="1"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:adedamolasamuel28@gmail.com"
                  style={{ color: "black", textDecoration: "none" }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#0779e4"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "black"
                  }}
                >
                  adedamolasamuel28@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
