// src/components/About.jsx
import React from "react";
import "./about.css";
import { Row, Col, Button } from "antd";
import { motion, stagger } from "framer-motion";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline, Popover } from "antd";
import TimelineWithPopover from "./TimelineWithPopover";
export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "4rem 2rem",

        // height: "100vh", // Ensure it takes full viewport height
      }}
    >
      <h2 className="about-me">About Me</h2>
      <div
        className="about-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // flexGrow: 1, // Takes the remaining space
          // minHeight: 0, // Ensures content doesn't overflow
        }}
      >
        <p className="about-text" style={{ maxWidth: "600px" }}>
          Hi, my name is Loshithan. I am a Fullstack web developer, UI designer,
          and Mobile developer. I have honed my skills in Web Development and
          advanced UI design principles.
        </p>
        <div
          className="about-text2"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <p style={{ fontSize: "4rem", fontWeight: "bolder" }}>5+</p>{" "}
          <p style={{ fontSize: "1.1rem", fontWeight: 600 }} className=" font">
            Years of Experience
          </p>
        </div>
        <div className=" relative w-full min-h-[70vh]">         
          <TimelineWithPopover />
        </div>
      </div>
    </section> 
  );
}
