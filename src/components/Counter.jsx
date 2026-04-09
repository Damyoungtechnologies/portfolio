import CounterItem from "./CounterItem"
import React from "react";

const Counter = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/images/counter_bg.webp")' }}>
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-[#0779e4]/90 dark:bg-slate-950/95 z-0"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl z-0"></div>

      <div className="container w-[90%] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <CounterItem
            count={200}
            label="Successful Projects"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            }
          />
          <CounterItem
            count={100}
            label="Satisfied Clients"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            }
          />
          <CounterItem
            count={10}
            label="Innovation Awards"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            }
          />
        </div>
      </div>
    </section>
  )
}

export default Counter
