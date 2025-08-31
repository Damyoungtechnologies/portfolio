"use client";
import React from "react";
import { useEffect, useState } from "react";
import "../servicemodal.css";

const ServiceModal = ({ isOpen, onClose, title, serviceId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [works, setWorks] = useState([]);

  // Service portfolio data - Add your projects here for each service
  const servicePortfolios = React.useMemo(
    () => ({
      uiux: [
        {
          id: 1,
          title: "Mobile Banking App UI",
          description:
            "A user-centered design approach for a mobile banking app that increased user engagement by 45%. Features include intuitive navigation, accessibility compliance, and modern design patterns.",
          type: "image",
          src: "/images/uiux/banking-app.jpg", // Replace with your actual image path
          link: "https://dribbble.com/your-project",
          tags: ["Mobile Design", "Banking", "User Experience"],
        },
        {
          id: 2,
          title: "E-commerce Dashboard",
          description:
            "Complete dashboard redesign for an e-commerce platform with focus on data visualization and user workflow optimization.",
          type: "website",
          src: "https://your-dashboard-demo.com", // Replace with actual website URL
          link: "https://your-dashboard-demo.com",
          tags: ["Web Design", "Dashboard", "E-commerce"],
        },
        {
          id: 3,
          title: "Design Process Walkthrough",
          description:
            "A detailed video walkthrough of my design process from research to final prototype, showcasing user research, wireframing, and testing phases.",
          type: "video",
          src: "/videos/uiux/design-process.mp4", // Replace with your actual video path
          link: "https://youtube.com/watch?v=your-video",
          tags: ["Process", "Prototyping", "User Research"],
        },
      ],
      webdev: [
        {
          id: 1,
          title: "Construction Company Website",
          description:
            "Deablyn Global Services Limited is an Indigenous construction company that performs engineering, procurement, construction, and inspection (EPCI) Services in real estate, Buildings, Roads, Civil and general construction, and other infrastructure sectors.",
          type: "website",
          src: "https://deablyn.com/",
          link: "https://deablyn.com/",
          tags: ["Content Management System", "Wordpress"],
        },
        {
          id: 2,
          title: "Anetcom Technologies Website",
          description:
            "Anettcom technologies creates impactful website, build scalable software products, and empower learners through tech education - we're your digital partner.",
          type: "website",
          src: "https://anettcom.com/",
          link: "https://anettcom.com/",
          tags: ["React", "HTML", "CSS", "Javascript"],
        },
        {
          id: 3,
          title: "Portfolio Website",
          description:
            "My porfolio website showcasing my skills and expertise.",
          type: "website",
          src: "https://samuelayodeji027.netlify.app",
          link: "https://samuelayodeji027.netlify.app",
          tags: ["React", "Javascript", "Tailwind", "CSS3", "HTML"],
        },
      ],
      graphic: [
        {
          id: 1,
          title: "Brand Identity Design",
          description:
            "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup company.",
          type: "image",
          src: "/images/graphic/brand-identity.jpg",
          link: "https://behance.net/your-project",
          tags: ["Branding", "Logo Design", "Identity"],
        },
        {
          id: 2,
          title: "Marketing Campaign Assets",
          description:
            "A collection of marketing materials including social media graphics, print advertisements, and digital banners for a product launch.",
          type: "image",
          src: "/images/graphic/marketing-campaign.jpg",
          link: "https://behance.net/your-campaign",
          tags: ["Marketing", "Social Media", "Print Design"],
        },
      ],
      scratch: [
        {
          id: 1,
          title: "Interactive Story Game",
          description:
            "An educational interactive story game that teaches kids about environmental conservation through engaging gameplay and colorful characters.",
          type: "website",
          src: "https://scratch.mit.edu/projects/your-project-id",
          link: "https://scratch.mit.edu/projects/your-project-id",
          tags: ["Education", "Interactive Story", "Environment"],
        },
        {
          id: 2,
          title: "Math Learning Game",
          description:
            "A fun math learning game that helps children practice arithmetic operations through gamification and reward systems.",
          type: "video",
          src: "/videos/scratch/math-game-demo.mp4",
          link: "https://scratch.mit.edu/projects/your-math-game",
          tags: ["Education", "Math", "Gamification"],
        },
      ],
      video: [
        {
          id: 1,
          title: "Corporate Brand Video",
          description:
            "A professional brand video showcasing company values and services with motion graphics, color correction, and professional audio mixing.",
          type: "video",
          src: "/videos/editing/corporate-brand.mp4",
          link: "https://vimeo.com/your-video",
          tags: ["Corporate", "Branding", "Motion Graphics"],
        },
        {
          id: 2,
          title: "Event Highlight Reel",
          description:
            "A dynamic highlight reel from a tech conference featuring multiple camera angles, smooth transitions, and synchronized audio.",
          type: "video",
          src: "/videos/editing/event-highlights.mp4",
          link: "https://youtube.com/watch?v=your-event-video",
          tags: ["Event", "Multi-camera", "Highlights"],
        },
      ],
      data: [
        {
          id: 1,
          title: "Sales Analytics Dashboard",
          description:
            "Interactive dashboard analyzing sales data with real-time visualizations, trend analysis, and predictive modeling using Python and Tableau.",
          type: "website",
          src: "https://your-dashboard-demo.com/sales",
          link: "https://github.com/your-analytics-repo",
          tags: ["Python", "Tableau", "Sales Analytics"],
        },
        {
          id: 2,
          title: "Data Visualization Portfolio",
          description:
            "A collection of data visualizations showcasing various techniques for presenting complex data in an understandable format.",
          type: "image",
          src: "/images/data/visualizations-portfolio.jpg",
          link: "https://your-data-portfolio.com",
          tags: ["Visualization", "Charts", "Infographics"],
        },
      ],
      copy: [
        {
          id: 1,
          title: "Website Copy Portfolio",
          description:
            "Collection of website copy samples including landing pages, product descriptions, and email campaigns that increased conversion rates by 30%.",
          type: "website",
          src: "https://your-copy-portfolio.com",
          link: "https://your-copy-portfolio.com",
          tags: ["Web Copy", "Conversion", "Landing Pages"],
        },
        {
          id: 2,
          title: "Content Strategy Case Study",
          description:
            "Detailed case study showing content strategy development and implementation for a SaaS company, including content calendar and performance metrics.",
          type: "image",
          src: "/images/copy/content-strategy.jpg",
          link: "https://your-case-study.com",
          tags: ["Strategy", "SaaS", "Content Marketing"],
        },
      ],
      security: [
        {
          id: 1,
          title: "Security Audit Report",
          description:
            "Comprehensive security audit documentation for a financial services company, including vulnerability assessment and remediation recommendations.",
          type: "image",
          src: "/images/security/audit-report.jpg",
          link: "https://your-security-portfolio.com",
          tags: [
            "Security Audit",
            "Vulnerability Assessment",
            "Financial Services",
          ],
        },
        {
          id: 2,
          title: "Cybersecurity Training Demo",
          description:
            "Educational video demonstrating common security threats and best practices for employees in corporate environments.",
          type: "video",
          src: "/videos/security/training-demo.mp4",
          link: "https://your-training-platform.com",
          tags: ["Training", "Education", "Corporate Security"],
        },
      ],
      software: [
        {
          id: 1,
          title: "Full-Stack Web Application",
          description:
            "Enterprise-level web application built with modern technologies including microservices architecture, automated testing, and CI/CD pipeline.",
          type: "website",
          src: "https://your-app-demo.com",
          link: "https://github.com/your-enterprise-app",
          tags: ["Full-Stack", "Microservices", "Enterprise"],
        },
        {
          id: 2,
          title: "Mobile App Development",
          description:
            "Cross-platform mobile application with offline capabilities, push notifications, and seamless user experience across iOS and Android.",
          type: "video",
          src: "/videos/software/mobile-app-demo.mp4",
          link: "https://play.google.com/store/apps/your-app",
          tags: ["Mobile", "Cross-platform", "React Native"],
        },
        {
          id: 3,
          title: "API Documentation",
          description:
            "Comprehensive API documentation and integration examples for a RESTful service with authentication and rate limiting.",
          type: "image",
          src: "/images/software/api-docs.jpg",
          link: "https://your-api-docs.com",
          tags: ["API", "Documentation", "REST"],
        },
      ],
    }),
    []
  );

  useEffect(() => {
    if (isOpen && servicePortfolios[serviceId]) {
      setWorks(servicePortfolios[serviceId]);
      setCurrentIndex(0);
      document.body.style.overflow = "hidden";
    } else if (isOpen) {
      // Fallback for services without portfolio data
      setWorks([
        {
          id: 1,
          title: `${title} Project 1`,
          description:
            "Sample project description. Add your actual project data to the servicePortfolios object.",
          type: "image",
          src: "/placeholder.svg",
          link: "#",
          tags: ["Sample", "Placeholder"],
        },
      ]);
      setCurrentIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, title, serviceId, servicePortfolios]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + works.length) % works.length
    );
  };

  const renderContent = (work) => {
    switch (work.type) {
      case "image":
        return (
          <img
            src={work.src}
            alt={work.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            onError={(e) => {
              e.target.src =
                "/placeholder.svg?height=400&width=600&text=Image+Not+Found";
            }}
          />
        );

      case "video":
        return (
          <video
            controls
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <source src={work.src} type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        );

      case "website":
        return (
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <iframe
              src={work.src}
              title={work.title}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        );

      default:
        return (
          <div
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            <p>Content type not supported</p>
          </div>
        );
    }
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
            className="close-button"
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              color: "#666",
            }}
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          {currentWork && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {/* Content Display Area */}
                <div style={{ flex: "1 1 400px" }}>
                  {renderContent(currentWork)}
                </div>

                {/* Project Details */}
                <div style={{ flex: "1 1 300px" }}>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#333",
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

                  {/* Tags */}
                  {currentWork.tags && (
                    <div style={{ marginBottom: "20px" }}>
                      {currentWork.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            display: "inline-block",
                            backgroundColor: "#f0f8ff",
                            color: "#0779e4",
                            fontSize: "12px",
                            fontWeight: "500",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            marginRight: "8px",
                            marginBottom: "8px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Content Type Indicator */}
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor:
                          currentWork.type === "image"
                            ? "#e6f7ff"
                            : currentWork.type === "video"
                            ? "#fff0f6"
                            : currentWork.type === "website"
                            ? "#f6ffed"
                            : "#f0f0f0",
                        color:
                          currentWork.type === "image"
                            ? "#0779e4"
                            : currentWork.type === "video"
                            ? "#eb2f96"
                            : currentWork.type === "website"
                            ? "#52c41a"
                            : "#666",
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        textTransform: "capitalize",
                      }}
                    >
                      {currentWork.type}
                    </span>
                  </div>

                  {/* Action Button */}
                  <a
                    href={currentWork.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#0779e4",
                      color: "white",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#0566c5";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#0779e4";
                    }}
                  >
                    {currentWork.type === "website"
                      ? "Visit Site"
                      : currentWork.type === "video"
                      ? "Watch Full Video"
                      : "View Project"}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="modal-footer">
          <button
            onClick={prevSlide}
            disabled={works.length <= 1}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: works.length <= 1 ? "#f5f5f5" : "#f0f0f0",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              cursor: works.length <= 1 ? "not-allowed" : "pointer",
              transition: "background-color 0.3s ease",
              color: works.length <= 1 ? "#ccc" : "#333",
            }}
            onMouseOver={(e) => {
              if (works.length > 1) {
                e.target.style.backgroundColor = "#e0e0e0";
              }
            }}
            onMouseOut={(e) => {
              if (works.length > 1) {
                e.target.style.backgroundColor = "#f0f0f0";
              }
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
              style={{ marginRight: "6px" }}
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Previous
          </button>

          <div
            style={{
              fontSize: "14px",
              color: "#666",
              padding: "0 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {currentIndex + 1} of {works.length}
          </div>

          <button
            onClick={nextSlide}
            disabled={works.length <= 1}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: works.length <= 1 ? "#f5f5f5" : "#f0f0f0",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              cursor: works.length <= 1 ? "not-allowed" : "pointer",
              transition: "background-color 0.3s ease",
              color: works.length <= 1 ? "#ccc" : "#333",
            }}
            onMouseOver={(e) => {
              if (works.length > 1) {
                e.target.style.backgroundColor = "#e0e0e0";
              }
            }}
            onMouseOut={(e) => {
              if (works.length > 1) {
                e.target.style.backgroundColor = "#f0f0f0";
              }
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
              style={{ marginLeft: "6px" }}
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
