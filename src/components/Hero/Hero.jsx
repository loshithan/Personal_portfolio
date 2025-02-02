// src/components/Hero.jsx
import React from "react";
import "./hero.css";
import { Row, Col, Button } from "antd";
import { motion, stagger } from "framer-motion";
import circle from '../../../public/assets/circle.png'
export default function Hero() {
  const charVariant = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  const textCharArr =
    `Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.`
      .trim()
      .split("");
  return (
    <section
      className="hero-section"
      style={{ padding: "4rem 2rem", textAlign: "left" }}
    >
      <motion.div
        className="background-text"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 30, 
          repeat: Infinity, 
          ease: "linear", 
          repeatType: 'loop'
        }}
      >
        {" "}
        FULLSTACK DOTNET DEVELOPER{" "}
      </motion.div>{" "}
      <Row align={"middle"} gutter={16}>
        <div>
          <h2 style={{ marginTop: "0" }}>Hello, I’m</h2>
          <h1 style={{ fontSize: "3rem" }}>Loshithan Paramaguru</h1>
          <div className="hero-description">
            <motion.p
              initial={"hidden"}
              whileInView={"reveal"}
              transition={{ staggerChildren: 0.02 }}
              viewport={{once:true}}
            >
              {textCharArr.map((char) => (
                <motion.span
                  key={char}
                  variants={charVariant}
                  transition={{ duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Row gutter={16} style={{ marginLeft: "-16px" }}>
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
          <div>
            {" "}
            <motion.img
              src={circle}
              alt="circle"
              style={{ height: "450px" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />{" "}
          </div>{" "}
        </div>
      </Row>
    </section>
  );
}
