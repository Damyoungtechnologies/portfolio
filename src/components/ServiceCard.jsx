"use client";
import React from "react";

import { useState } from "react";
import ServiceModal from "./ServiceModal";

const ServiceCard = ({ title, id, icon, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="service-card glass-card p-8 rounded-3xl smooth-transition hover:-translate-y-2 border border-slate-100 dark:border-white/5 flex flex-col h-full dark:!bg-slate-900/40">
        <div className="w-16 h-16 bg-blue-50 dark:bg-slate-800 text-[#0779e4] dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#0779e4] transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
            {text}
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center !border-0 !outline-none !bg-transparent gap-2 text-[#0779e4] dark:text-blue-400 font-bold group w-fit hover:gap-3 transition-all"
        >
          Explore Portfolio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        serviceId={id}
      />
    </>
  );
};

export default ServiceCard;
