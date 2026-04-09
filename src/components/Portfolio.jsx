import PortfolioItem from "./PortfolioItem";
import React from "react";

const Portfolio = () => {
  return (
    <section id="gallery" className="portfolio bg-[#f8fafc] dark:bg-slate-900 py-24">
      <div className="w-[90%] mx-auto">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-label">Gallery</span>
          <h1 className="gradient-text font-black dark:!from-blue-400 dark:!to-blue-200" style={{ fontSize: "3rem" }}>
            Photo Gallery
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg max-w-[600px] mx-auto opacity-80">
            A visual collection of moments and captures that define my creative perspective.
          </p>
        </div>
        <div>
          <PortfolioItem />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
