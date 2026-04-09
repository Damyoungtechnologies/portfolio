import TestimonialCard from "./TestimonialCard";
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials bg-slate-50 dark:bg-slate-950 py-24">
      <div className="w-[90%] mx-auto">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-label">Testimonials</span>
          <h1 className="gradient-text font-black dark:!from-blue-400 dark:!to-blue-200" style={{ fontSize: "3rem" }}>
            Voices of Trust
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-[600px] mx-auto">
            See what clients and partners have to say about our collaborative success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            image="https://images.unsplash.com/photo-1561406636-b80293969660?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBsYWR5fGVufDB8fDB8fHww"
            full_name="Emily Carter"
            role="Product Designer"
            testimony="Working with Samuel Ayodeji has been a game-changer. His expertise and dedication on projects are unmatched."
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D"
            full_name="David Lee"
            role="Tech Entrepreneur"
            testimony="Samuel’s leadership and vision are unmatched. He brings out the best in everyone around him."
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1593351799227-75df2026356b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBsYWR5fGVufDB8fDB8fHww"
            full_name="Sarah Johnson"
            role="Visionary CEO"
            testimony="His strategic thinking and commitment drive our success every single day. It's a pleasure working with him."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
