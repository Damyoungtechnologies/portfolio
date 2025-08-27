"use client";
import React from "react";

import { useEffect, useState } from "react";

const ServiceModal = ({ isOpen, onClose, title, serviceId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    // Generate different works based on service ID
    const generateWorks = () => {
      const baseWorks = [
        {
          id: 1,
          title: `${title} Project 1`,
          description:
            "A comprehensive project showcasing my skills in this area. This project demonstrates my ability to deliver high-quality work.",
          type: "image",
          src: `/placeholder.svg?height=400&width=600&text=${serviceId}_1`,
          link: "https://example.com/project1",
        },
        {
          id: 2,
          title: `${title} Project 2`,
          description:
            "An innovative approach to solving complex problems. This project was completed for a client with specific requirements.",
          type: "video",
          src: `/placeholder.svg?height=400&width=600&text=${serviceId}_2_video`,
          link: "https://example.com/project2",
        },
        {
          id: 3,
          title: `${title} Project 3`,
          description:
            "A creative solution that exceeded client expectations. This project showcases my attention to detail and commitment to quality.",
          type: "image",
          src: `/placeholder.svg?height=400&width=600&text=${serviceId}_3`,
          link: "https://example.com/project3",
        },
      ];

      // Add service-specific customization
      if (serviceId === "uiux") {
        baseWorks[0].description =
          "A user-centered design approach for a mobile app that increased user engagement by 45%.";
      } else if (serviceId === "webdev") {
        baseWorks[0].description =
          "A responsive website built with React and CSS, featuring optimized performance and SEO.";
      } else if (serviceId === "graphic") {
        baseWorks[0].description =
          "A brand identity design including logo, color palette, and typography for a startup company.";
      }

      setWorks(baseWorks);
    };

    if (isOpen) {
      generateWorks();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, title, serviceId]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + works.length) % works.length
    );
  };

  if (!isOpen) return null;

  const currentWork = works[currentIndex];

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-animation">
        <div className="modal-header">
          <h2
            style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#0779e4" }}
          >
            {title} Portfolio
          </h2>
          <button
            onClick={onClose}
            className="close-button !border-0 !outline-none"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          {currentWork && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    flex: "1 1 300px",
                  }}
                >
                  {currentWork.type === "image" ? (
                    <img
                      src={currentWork.src || "/placeholder.svg"}
                      alt={currentWork.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        paddingTop: "56.25%",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "5px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ margin: "0 auto 10px" }}
                          >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                          <p>Video Preview</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    flex: "1 1 300px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {currentWork.title}
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: "20px",
                      lineHeight: "1.6",
                    }}
                  >
                    {currentWork.description}
                  </p>
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor:
                          currentWork.type === "image" ? "#e6f7ff" : "#fff0f6",
                        color:
                          currentWork.type === "image" ? "#0779e4" : "#eb2f96",
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      {currentWork.type === "image" ? "Image" : "Video"}
                    </span>
                  </div>
                  <a
                    href={currentWork.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#0779e4",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      textDecoration: "none",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#0566c5";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#0779e4";
                    }}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button
            onClick={prevSlide}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#e0e0e0";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#f0f0f0";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "5px" }}
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Previous
          </button>

          <div style={{ fontSize: "14px", color: "#666" }}>
            {currentIndex + 1} of {works.length}
          </div>

          <button
            onClick={nextSlide}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#e0e0e0";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#f0f0f0";
            }}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "5px" }}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
