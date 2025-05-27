import React from "react";

const TestimonialCard = () => {
  return (
    <div className="service-card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Testimonial"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <span
            style={{
              position: "absolute",
              bottom: "-5px",
              right: "-5px",
              backgroundColor: "#0779e4",
              color: "white",
              padding: "8px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48"
              />
            </svg>
          </span>
        </div>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Roger Scott
          </h1>
          <p style={{ color: "#0779e4" }}>Marketing Manager</p>
        </div>
      </div>

      <div>
        <p style={{ color: "#666", lineHeight: "1.6" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
