import React, { useState, useEffect } from "react";
import { port1, port2, port3, port4, port5, port6 } from "../assets";

const PortfolioItem = () => {
  const images = [port1, port2, port3, port4, port5, port6];
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg dark:shadow-none hover:shadow-2xl dark:border dark:border-white/5 transition-all duration-500"
            onClick={() => setSelectedImage(img)}
          >
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/60 z-10 transition-all duration-500 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-sm">
              <div className="text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-md mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <span className="font-bold tracking-widest text-xs uppercase">View Image full-screen</span>
              </div>
            </div>
            <img
              src={img}
              alt={`Samuel Ayodeji Portfolio Project ${index + 1} - Showcasing high-impact software solutions and technological innovation`}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Modern Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"></div>
          
          <div 
            className="relative z-10 max-w-6xl w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button UI */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute !border-0 !outline-none top-0 right-0 md:-top-8 md:-right-12 p-3 text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            <div className="w-full h-full flex items-center justify-center p-2">
              <img
                src={selectedImage}
                alt="Samuel Ayodeji Portfolio Project Expanded View"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-scale-up border border-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioItem;
