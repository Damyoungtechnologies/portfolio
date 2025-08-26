import React from "react";
import { whatsapp } from "../assets";

const WhatsApp = () => {
  return (
    <section className="whatsapp-section">
      <div className="w-[90%] mx-auto">
        <div className="whatsapp-container">
          <div className="whatsapp-content">
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Have any works you want to done by me?
            </h1>
            <p style={{ fontSize: "1.2rem" }}>
              Click the link below or scan the code to connect to my whatsapp
            </p>
          </div>
          <div
            className="whatsapp-qr"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img
              src={whatsapp}
              alt="WhatsApp QR Code"
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            />
            <a
              href="https://wa.me/message/WOOULUY42T5VK1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid white",
                color: "white",
                padding: "12px 20px",
                borderRadius: "5px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#0779e4";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
              }}
            >
              Let's Connect on Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsApp;
