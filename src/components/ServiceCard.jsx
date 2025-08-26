"use client"
import React from "react";

import { useState } from "react"
import ServiceModal from "./ServiceModal"

const ServiceCard = ({ title, id, icon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="service-card">
        <span
          className="service-logo"
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "15px",
            backgroundColor: "#0779e4",
            padding: "15px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          {icon}
        </span>
        <div className="service-details">
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#0779e4",
              marginBottom: "10px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: "#666",
              margin: "15px 0",
              lineHeight: "1.6",
            }}
          >
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "#0779e4",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "0",
            fontSize: "16px",
          }}
          onMouseOver={(e) => {
            e.target.style.textDecoration = "underline"
          }}
          onMouseOut={(e) => {
            e.target.style.textDecoration = "none"
          }}
        >
          Discover
          <span style={{ marginLeft: "5px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z" />
            </svg>
          </span>
        </button>
      </div>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title} serviceId={id} />
    </>
  )
}

export default ServiceCard
