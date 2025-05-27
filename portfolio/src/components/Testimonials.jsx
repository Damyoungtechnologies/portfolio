import TestimonialCard from "./TestimonialCard";
import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
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
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            OUR SUCCESSFUL STUDENTS
          </h1>
        </div>

        <div className="testimonials-grid">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
