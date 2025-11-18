"use client";
import React from "react";
import { useEffect, useState } from "react";
import "../servicemodal.css";
import { damtasker, shinystars } from "../assets";

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
          title: "Damtasker Brand Logo",
          description:
            "Damtasker task prioritizer app is a web app that uses Eisen Hower 4-quadrant method to prioritize tasks and enables users to manage their schedules efficiently.",
          type: "video",
          src: damtasker,
          link: "https://www.canva.com/design/DAGYIzJYMkc/bYhGT8U-yyTJXxzJsTbrtw/edit?utm_content=DAGYIzJYMkc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
          tags: ["Branding", "Logo Design", "Coreldraw", "Canva"],
        },
        {
          id: 2,
          title: "E-flyer design",
          description:
            "My e-flyers and e-banners design projects are on my facebook page. Visit the link below to explore them.",
          type: "image",
          src: shinystars,
          link: "https://www.facebook.com/share/1AXpk5nNp2/",
          tags: ["Coreldraw", "Leonardo AI", "Print Design"],
        },
      ],
      scratch: [
        {
          id: 1,
          title: "Cat-Bat Flight",
          description:
            "An educational interactive story game that teaches kids about partnership with good company of friend could help one to reach one's destination on time.",
          type: "iframe",
          src: "https://scratch.mit.edu/projects/1243740440/embed",
          link: "https://scratch.mit.edu/projects/1243740440",
          tags: ["Education", "Interactive Story", "Animation"],
        },
        {
          id: 2,
          title: "Platformer Game",
          description:
            "An educational interactive story game that teaches kids about how to be be security conscious by avoiding the enemies",
          type: "iframe",
          src: "https://scratch.mit.edu/projects/1243755813/embed",
          link: "https://scratch.mit.edu/projects/1243755813",
          tags: ["Education", "Interactive Game", "Security"],
        },
        {
          id: 3,
          title: "United Nations SDGs",
          description:
            "An educational interactive story game that teaches kids about environmental and climate action which can help to cure environmental degradation issues.",
          type: "iframe",
          src: "https://scratch.mit.edu/projects/1243770115/embed",
          link: "https://scratch.mit.edu/projects/1243770115",
          tags: ["Education", "Interactive Story", "Environment"],
        },
        {
          id: 4,
          title: "Shark-Diver Game",
          description:
            "An educational interactive game of divers swimming in the ocean to avoid a hungry shark",
          type: "iframe",
          src: "https://scratch.mit.edu/projects/1243778025/embed",
          link: "https://scratch.mit.edu/projects/1243778025",
          tags: ["Education", "Interactive Game", "Security"],
        },
        {
          id: 5,
          title: "Magical Adventure",
          description:
            "An educational interactive story about magical adventure in an icy dark cave",
          type: "iframe",
          src: "https://www.youtube.com/embed/_AEHj_2KtD0?si=iLBdbXH9kYoyxtpd",
          link: "https://youtu.be/_AEHj_2KtD0?si=gvdP_feuzz5t8jKL",
          tags: ["Education", "Interactive Game", "Fun"],
        },
      ],
      video: [
        {
          id: 1,
          title: "Hope in Tembien",
          description:
            "Created and edited the 3D AI animation video on UN SDGs as a requirement for the SDG4Kids Muna Animation competition. The animation story was about the Ethiotrees program that ameliorated the desertification chaos that plagued Tembien in Ethiopia.",
          type: "iframe",
          src: "https://www.youtube.com/embed/mqDtlQx8wMo?si=KIbv_6EW7dAuaERB",
          link: "https://youtu.be/mqDtlQx8wMo?si=E2mqf7DPOjZf33Ho",
          tags: [
            "United Nations",
            "Sustainable Development Goals",
            "Desertification",
            "Bioconservation",
          ],
        },
        {
          id: 2,
          title: "Self Introduction",
          description: "This video displays my area of competencies and skills",
          type: "iframe",
          src: "https://www.youtube.com/embed/SrM6BGdi5JQ?si=u4fDM5Z5IKwcuWAC",
          link: "https://youtu.be/SrM6BGdi5JQ?si=u4fDM5Z5IKwcuWAC",
          tags: ["Skills", "Suma Cum Laude", "Multitalented"],
        },
        {
          id: 3,
          title: "Leadership Training",
          description:
            "Leadership training session at G-Eden Nursery and Primary School under the umbrella of NextGen Leadership Network",
          type: "iframe",
          src: "https://www.youtube.com/embed/ZqQm6d_RKNo?si=QaCfbJ-bPvKtqLzP",
          link: "https://youtu.be/ZqQm6d_RKNo?si=AQ5vgsf9XhOrci1T",
          tags: ["Leadership", "Nation Building", "Paradigm Shift"],
        },

        {
          id: 4,
          title: "Train the trainer experience",
          description:
            "The video answers few question about my experience during the training the trainer field experience",
          type: "iframe",
          src: "https://www.youtube.com/embed/RZa8ec7vVh0?si=prSRLPdqdj6_h0tA",
          link: "https://youtu.be/RZa8ec7vVh0?si=Cvh93-wvmuBzbpzw",
          tags: [
            "Service Leadership",
            "Ethical Leadership",
            "Personal Leadership",
            "Democratic Leadership",
          ],
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
          title: "Review on Biotechnology and Genetic Engineering",
          description:
            "Biotechnology and genetic engineering empower medicine, agriculture, and industry with precision. Innovations promise disease cures, resilient crops, and sustainable solutions.",
          type: "iframe",
          src: "https://www.youtube.com/embed/cWEo8ysGDKY?si=LXwCRRhS1bL6SPBX",
          link: "https://youtu.be/cWEo8ysGDKY?si=SUfTLkIOvs2Z3S-O",
          tags: ["Academic Research", "Presentation", "Biotechnology", "GMO"],
        },
        {
          id: 2,
          title: "Research and Presentation of Cybersecurity Project",
          description:
            "Detailed case study of Incident Response Playbooks (Phishing, Ransomware), Building a Secure Small Network, Applying Cryptography in Real-World Scenarios and Demonstrating FTP versus SFTP Security",
          type: "image",
          src: "src/assets/images/phish.png",
          link: "https://drive.google.com/drive/folders/1UIWa3Q5h8pfC7JUPmdf80TnFyWw8tmPf",
          tags: [
            "Cyber Security",
            "Encryption",
            "Social engineering",
            "Network segmentation",
          ],
        },
      ],
      security: [
        {
          id: 1,
          title:
            "Digital Forensics Investigation Report: Organized Cryptocurrency Fraud Network Case",
          description:
            "A forensic analysis of an Android Image confirms that a primary suspect named Sam orchestrated a transnational cryptocurrency fraud scheme.",
          type: "image",
          src: "src/assets/images/digital_forensic.png",
          link: "https://drive.google.com/file/d/1-w5MAqqvBUZKCqmNhgbXtfbO2hSkgxAO/view?usp=drive_link",
          tags: [
            "Security Audit",
            "Digital Forensics",
            "Autopsy",
            "Android Image",
            "Chain of Custody",
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
          title: "Task-prioritizer Web Application",
          description:
            "Damtasker is a web application that allows users to set their daily tasks in the order of priority according to Eisen Hower's Quadrant method.",
          type: "website",
          src: "https://damtasker.onrender.com/",
          link: "https://damtasker.onrender.com/",
          tags: ["React", "Firebase", "Web App", "Eisen Hower Quadrant"],
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
            loading="easy"
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
            controls={true}
            autoPlay={true}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            src={work.src}
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

      case "iframe":
        return (
          <div style={{ position: "relative", width: "100%", height: "402px" }}>
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
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
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
                            : currentWork.type === "iframe"
                            ? "#f9f0ff"
                            : "#f0f0f0",
                        color:
                          currentWork.type === "image"
                            ? "#0779e4"
                            : currentWork.type === "video"
                            ? "#eb2f96"
                            : currentWork.type === "website"
                            ? "#52c41a"
                            : currentWork.type === "iframe"
                            ? "#722ed1"
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
                      : currentWork.type === "iframe"
                      ? "Play Game"
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
