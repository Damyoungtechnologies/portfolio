import React from "react";
import { useState, useEffect, useRef } from "react";

const CounterItem = ({ count, label, icon }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const counterRef = useRef(null);
  const countedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !countedRef.current) {
          countedRef.current = true;
          let start = 0;
          const duration = 2000; // 2 seconds
          const step = Math.ceil(count / (duration / 16)); // 16ms per frame (approx 60fps)

          const timer = setInterval(() => {
            start += step;
            if (start > count) {
              setDisplayCount(count);
              clearInterval(timer);
            } else {
              setDisplayCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [count]);

  return (
    <div ref={counterRef} className="counter-item glass-card p-8 rounded-2xl flex items-center gap-6 shadow-xl border border-white/20 dark:!bg-slate-900/40">
      <div className="p-4 bg-white/10 dark:bg-blue-400/10 rounded-xl text-white dark:text-blue-300">
        {icon}
      </div>
      <div>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-none mb-2">
          {displayCount.toLocaleString()}
        </h1>
        <p className="text-blue-100 dark:text-blue-300/80 font-bold text-xs uppercase tracking-widest">{label}</p>
      </div>
    </div>
  );
};

export default CounterItem;
