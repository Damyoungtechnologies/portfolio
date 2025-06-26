import TestimonialCard from "./TestimonialCard";
import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials bg-white">
      <div className="">
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#0779e4",
              fontWeight: "bold",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            TESTIMONIAL
          </p>
        </div>

        <div className="testimonials-grid flex !items-center !justify-center mx-auto w-[90%]">
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
