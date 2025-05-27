import React from "react";
import { port1, port2, port3, port4, port5, port6 } from "../assets";

const PortfolioItem = () => {
  const image = [port1, port2, port3, port4, port5, port6];

  return (
    <div className="portfolio-item  rounded-lg relative  grid grid-cols-3 gap-2 ">
      {image.map((img, index) => (
        <div
          key={index}
          className="portfolio-image-container relative overflow-hidden rounded-lg"
          style={{
            height: "50vh",
            position: "relative",
            transition: "transform 0.5s ease",
          }}
        >
          <img
            src={img}
            alt={`Portfolio item ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            className="portfolio-image"
          />
        </div>
      ))}

      <div
        className="image-content"
        style={{
          position: "absolute",
          inset: "0",
          backgroundColor: "rgba(7, 121, 228, 0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          zIndex: 2,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Branding & Illustration Design
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              textTransform: "uppercase",
              fontSize: "0.8rem",
            }}
          >
            WEB DESIGN
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
