"use client";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="">
        <div className="contact-container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126497.66962347066!2d4.480298696494794!3d7.784293140727144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787e4c949b8fd%3A0x33c62c1600f59277!2sOsogbo%2C%20Osun!5e0!3m2!1sen!2sng!4v1746651350057!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{
                border: 0,
                width: "100%",
                height: "100%",
                minHeight: "400px",
                borderRadius: "5px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-form">
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#0779e4",
                marginBottom: "15px",
              }}
            >
              Contact me
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
              We're open for any suggestion or just to have a chat
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "#555",
                    marginBottom: "8px",
                  }}
                >
                  MY ADDRESS:
                </h2>
                <p style={{ color: "#666" }}>
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "#555",
                    marginBottom: "8px",
                  }}
                >
                  MY EMAIL:
                </h2>
                <a
                  href="mailto:adedamolasamuel28@gmail.com"
                  style={{ color: "#666", textDecoration: "none" }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#0779e4";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#666";
                  }}
                >
                  adedamolasamuel28@gmail.com
                </a>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "#555",
                    marginBottom: "8px",
                  }}
                >
                  MY PHONE:
                </h2>
                <a
                  href="tel:+2348032077924"
                  style={{ color: "#666", textDecoration: "none" }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#0779e4";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#666";
                  }}
                >
                  +2348032077924
                </a>
              </div>
            </div>

            <form style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "15px",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    style={{
                      flex: "1 1 200px",
                      padding: "12px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      fontSize: "16px",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    style={{
                      flex: "1 1 200px",
                      padding: "12px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      fontSize: "16px",
                    }}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "16px",
                  }}
                />
                <textarea
                  name="description"
                  placeholder="Create a message here"
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "16px",
                    resize: "none",
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#0779e4",
                    color: "white",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#0566c5";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#0779e4";
                  }}
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>

            <div style={{ marginTop: "30px" }}>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                Follow me here
              </h1>
              <div style={{ display: "flex", gap: "15px" }}>
                <a
                  href="#"
                  style={{ color: "#0779e4", textDecoration: "none" }}
                  onMouseOver={(e) => {
                    e.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.textDecoration = "none";
                  }}
                >
                  Facebook
                </a>
                <a
                  href="#"
                  style={{ color: "#0779e4", textDecoration: "none" }}
                  onMouseOver={(e) => {
                    e.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.textDecoration = "none";
                  }}
                >
                  Twitter
                </a>
                <a
                  href="#"
                  style={{ color: "#0779e4", textDecoration: "none" }}
                  onMouseOver={(e) => {
                    e.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.textDecoration = "none";
                  }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
