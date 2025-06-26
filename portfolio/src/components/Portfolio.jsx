import PortfolioItem from "./PortfolioItem";
import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio bg-[#F7F7F3]">
      <div className="w-[90%] mx-auto">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <p
            style={{
              color: "#0779e4",
              fontWeight: "bold",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            Gallery
          </p>
          <h1
            style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#0779E4" }}
          >
            My choicest Gallery
          </h1>
        </div>
        <div className="">
          <PortfolioItem />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
