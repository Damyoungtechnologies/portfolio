import React from "react";
import { whatsapp } from "../assets";

const WhatsApp = () => {
  return (
    <section className="relative py-20 bg-[#0779e4] dark:bg-slate-950 overflow-hidden">
      {/* Dynamic Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container w-[90%] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              Instant Chat
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Got a project in mind? <br/>
              <span className="text-blue-200">Let's talk on WhatsApp.</span>
            </h1>
            <p className="text-xl text-blue-50/80 max-w-lg mx-auto lg:mx-0">
              I'm available for new opportunities and collaborations. Get an instant response to your queries.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center gap-8">
            <div className="glass-card p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-2xl relative group transition-transform hover:scale-105 duration-500 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl"></div>
              <img
                src={whatsapp}
                alt="WhatsApp QR Code"
                className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 rounded-xl"
              />
              <div className="mt-4 text-center relative z-10">
                <p className="text-white dark:text-slate-500 text-sm font-bold uppercase tracking-wider">Scan to Begin</p>
              </div>
            </div>

            <a
              href="https://wa.me/message/WOOULUY42T5VK1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-[#0779e4] dark:text-blue-400 font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 border border-transparent dark:border-white/5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.948 11.948 0 001.611 6.132L0 24l6.102-1.6c1.83 1 3.906 1.53 6.023 1.531h.005c6.635 0 12.032-5.396 12.035-12.03a11.85 11.85 0 00-3.535-8.498"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsApp;
