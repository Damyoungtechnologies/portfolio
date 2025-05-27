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
    <div ref={counterRef} className="counter-item">
      <span className="counter-icon">{icon}</span>
      <div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          {displayCount.toLocaleString()}
        </h1>
        <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{label}</p>
      </div>
    </div>
  );
};

export default CounterItem;
