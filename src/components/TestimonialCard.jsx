import React from "react";

const TestimonialCard = ({ image, full_name, role, testimony }) => {
  return (
    <div className="glass-card p-8 rounded-3xl premium-shadow h-full flex flex-col border border-slate-100 dark:border-white/5 hover:-translate-y-1 transition-transform dark:!bg-slate-900/40">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <img
            src={image}
            alt={full_name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50 dark:ring-slate-800"
          />
          <div className="absolute -bottom-1 -right-1 bg-[#0779e4] dark:bg-blue-500 text-white p-1.5 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V15C21.017 16.1046 20.1216 17 19.017 17H16.017L16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3H10.017V15C10.017 16.1046 9.12157 17 8.017 17H5.017L5.017 21H3.017Z"/></svg>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">{full_name}</h4>
          <p className="text-[#0779e4] dark:text-blue-400 text-sm font-semibold">{role}</p>
        </div>
      </div>

      <div className="relative">
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed italic text-lg px-2">
          "{testimony}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
