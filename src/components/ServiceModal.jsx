import React from "react";
import { useEffect, useState } from "react";
import "../servicemodal.css";
import { damtasker, micokiki } from "../assets";

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
            "My Branding projects and e-flyer projects are on my facebook page. Visit the link below to explore them.",
          type: "image",
          src: micokiki,
          link: "https://www.facebook.com/share/18opJw5rXx/",
          tags: ["Coreldraw", "Gemini AI", "Print Design"],
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
          title: "Churn Prediction Model for a Bank",
          description:
            "This project analyzes customer data to predict churn, identifying key factors influencing customer retention using various machine learning models.",
          type: "html",
          src: "/samuel_ayodeji_churn_analysis.html",
          link: "/samuel_ayodeji_churn_analysis.html",
          tags: ["Python", "ML", "Supervised Learning"],
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
          src: "/images/phish.png",
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
          src: "/images/digital_forensic.png",
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
          title: "Application Security",
          description:
            "Web application security assessment of a Cooperative Management System Software - vulnerability hunt and necessary patch prognosis",
          type: "image",
          src: "/images/vulnerability_assessment.png",
          link: "https://drive.google.com/file/d/1YAglOQj1VQ-C5j6hDkF8gwnH9yPHd1SC/view?usp=sharing",
          tags: [
            "Ethical Hacking",
            "Pen testing",
            "Web security",
            "Application Security",
            "Vulnerability Scanning",
            "Burp",
          ],
        },
        {
          id: 3,
          title: "Setting up Cyber Security Lab",
          description:
            "Web application security assessment of a Cooperative Management System Software - vulnerability hunt and necessary patch prognosis",
          type: "image",
          src: "/images/kali.png",
          link: "https://drive.google.com/file/d/1ojKenK_Wc7Z9p1D8gxxFm5CXvv-B5nrJ/view?usp=drive_link",
          tags: ["Kali", "Linux OS", "Virtualbox", "ICMP", "Network Security"],
        },
        {
          id: 4,
          title: "Incident Response Playbook",
          description:
            "Incident Response Playbook contains comprehensive Incident Response (IR) playbooks for three specific cybersecurity scenarios: phishing attacks, ransomware attacks, and insider threats.",
          type: "image",
          src: "/images/playbook.png",
          link: "https://docs.google.com/document/d/11pKERNcMC5nWpNcPhqHsTG5m7NQ0FlUqdoc7vksfRWg/edit?usp=drive_link",
          tags: [
            "Phishing",
            "Social Engineering",
            "Response commanders",
            "Ransomware",
            "Zero Day",
            "Threats",
          ],
        },
        {
          id: 5,
          title: "Secure Small Network",
          description:
            "The design and security of a small network using a three-zone architecture (trusted internal LAN, untrusted guest LAN, and partially trusted DMZ) connected by a central firewall.",
          type: "image",
          src: "/images/network.png",
          link: "https://docs.google.com/document/d/1ug4CGou07n4xjw316iy2ofsuSobdpuMVhHYT45bE0F8/edit?usp=drive_link",
          tags: [
            "NMAP",
            "Port hardening",
            "Firewall",
            "VLAN",
            "DMZ",
            "Ports",
            "Cisco packet tracer",
          ],
        },
        {
          id: 6,
          title: "Cryptography in realworld scenario",
          description:
            "The practical applications of various cryptographic techniques, including hands-on steps using OpenSSL for encryption, hashing, and digital signatures.",
          type: "image",
          src: "/images/encrypt.png",
          link: "https://docs.google.com/document/d/1ghXGNwNM-hrcVxRd7xmLgKYtQamJosaA2sqiUSRf_qs/edit?usp=drive_link",
          tags: [
            "Encyption",
            "Encryption key",
            "Openssl",
            "Digital signature",
            "Hashing",
            "AES",
            "RSA",
          ],
        },
        {
          id: 7,
          title: "Demonstrating FTP vs SFTP Security",
          description:
            "Demonstrating FTP vs. SFTP Security, provides a comparative analysis of the File Transfer Protocol (FTP) and the Secure File Transfer Protocol (SFTP), including setup instructions for demonstrating their security differences using tools like Wireshark",
          type: "image",
          src: "/images/ftp_security.png",
          link: "https://docs.google.com/document/d/1NqCfXzVhOJKBC6t51916CQ84c02rNy8X7bYRiH4scT8/edit?usp=drive_link",
          tags: [
            "Security",
            "Port",
            "VSFTPD",
            "Encryption",
            "Wireshark",
            "Hardening",
            "Packet Analysis",
          ],
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
    const commonClasses = "w-full h-auto rounded-2xl shadow-2xl border border-white/10 object-cover";
    
    switch (work.type) {
      case "image":
        return (
          <img
            loading="lazy"
            src={work.src}
            alt={work.title}
            className={commonClasses}
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400/0f172a/white?text=Image+Not+Found";
            }}
          />
        );

      case "video":
        return (
          <video
            controls
            autoPlay
            className={commonClasses}
            src={work.src}
          >
            <source src={work.src} type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        );

      case "website":
      case "iframe":
      case "html":
        return (
          <div className="relative w-full aspect-video md:h-[450px]">
            <iframe
              src={work.src}
              title={work.title}
              className="w-full h-full border-0 rounded-2xl shadow-2xl bg-slate-900"
              allowTransparency="true"
              allowFullScreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        );

      default:
        return (
          <div className="w-full h-[300px] bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500">
            <p>Content type not supported</p>
          </div>
        );
    }
  };

  if (!isOpen) return null;

  const currentWork = works[currentIndex];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content modal-animation group/modal" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-1">Portfolio</span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="close-button"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {currentWork && (
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Content Display Area */}
              <div className="w-full lg:w-[60%] project-display group/display relative">
                {renderContent(currentWork)}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`type-indicator ${
                    currentWork.type === "image" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                    currentWork.type === "video" ? "bg-rose-500/20 text-rose-400 border border-rose-500/30" :
                    currentWork.type === "website" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                    "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  } backdrop-blur-md`}>
                    {currentWork.type}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-[40%] flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 tracking-tight">
                    {currentWork.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {currentWork.description}
                  </p>
                </div>

                {/* Tags */}
                {currentWork.tags && (
                  <div className="flex flex-wrap gap-2 mb-10">
                    {currentWork.tags.map((tag, index) => (
                      <span key={index} className="tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto">
                  {/* Action Button */}
                  <a
                    href={currentWork.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#0779e4] !text-white font-black text-sm uppercase tracking-widest rounded-xl shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:bg-[#0566c5] hover:translate-y-[-2px] transition-all duration-300"
                  >
                    <span>
                      {currentWork.type === "website" ? "Visit Live Site" : 
                       currentWork.type === "video" ? "Watch Showcase" : 
                       currentWork.type === "iframe" ? "Launch Interactive" : 
                       "View Full Details"}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14m-7-7 7 7-7 7"/>
                    </svg>
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
            className="nav-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <span>Previous</span>
          </button>

          <div className="dot-container">
            {works.map((_, i) => (
              <div 
                key={i} 
                className={`dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={works.length <= 1}
            className="nav-btn"
          >
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6 6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
