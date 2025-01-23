// src/components/Hero.jsx
import React from "react";
import "./hero.css";
import { Row, Col, Button } from "antd";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ padding: "4rem 2rem", textAlign: "left" }}
    >
      <Row align={"middle"} gutter={16}>
      <div>
      <h2 style={{ marginTop: "0" }}>Hello, I’m</h2>
      <h1 style={{ fontSize: "3rem" }}>Loshithan Paramaguru</h1>
      <div className="hero-description">
        <p>
          Freelance UI designer, Fullstack developer, & Data Miner. I create
          seamless web experiences for end-users.
        </p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Row gutter={16} style={{marginLeft:'-16px'}}>
            <Button
              style={{
                margin: "0 1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#6c63ff",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                display: "flex", // Use flexbox for alignment
                alignItems: "center",
                justifyContent: "space-between", // Adjust spacing between items
              }}
              type="default"
            >
              <p style={{ margin: 0 }}>About Me</p>
              <span className="material-icons" style={{ fontSize: "1.2rem" }}>
                person
              </span>
            </Button>
            <Button
                  className="custom-button"

              style={{
                margin: "0 1rem",
                padding: "0.5rem 1rem",
                backgroundColor: " transparent",
                color: "#fff",
                cursor: "pointer",
              }}
              type="default"
            >
              <p style={{ margin: 0 }}>Projects</p>
              <span class="material-icons" style={{ fontSize: "1.2rem" }}>
                visibility
              </span>
            </Button>
        </Row>

      </div>
      </div>
      <div>
        <img src="src/assets/circle.png" alt="circle" style={{height:"450px"}} />
      </div>
      </Row>
      
      
      
    </section>
  );
}
