import React, { useState } from "react";
import "./tools.css";
import { Tooltip } from "antd";
import { FaReact } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { FaGitlab } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiJfrogpipelines } from "react-icons/si";
import { Segmented, Tabs } from "antd";
import { SiBlazor } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import useAnimation from "../Hooks/CustomHooks";

const Tools = () => {
  const [alignValue, setAlignValue] = useState("frontend");
  const {
    sectionTitleAnimation,
    sectionAnimation,
    ref,
    containerAnimation,
    gridItemAnimation,
  } = useAnimation();

  const categorizedIcons = {
    frontend: [
      { label: "React", icon: <FaReact /> },
      { label: "Blazor", icon: <SiBlazor /> },
      { label: "Figma", icon: <FaFigma /> },
      { label: "Typescript", icon: <SiTypescript /> },
      { label: "CSS", icon: <IoLogoCss3 /> },
      { label: "Ant Design", icon: <SiAntdesign /> },
      { label: "MUI", icon: <SiMui /> },
    ],
    backend: [
      { label: ".NET", icon: <AiOutlineDotNet /> },
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: "Python", icon: <FaPython /> },
      { label: "Flask", icon: <SiFlask /> },
      { label: "MySQL", icon: <SiMysql /> },
      { label: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { label: "MSSQL", icon: <DiMsqlServer /> },
    ],

    deployment: [
      { label: "Azure", icon: <VscAzure /> },
      { label: "Docker", icon: <FaDocker /> },
      { label: "HuggingFace", icon: <SiHuggingface /> },
      { label: "GitHub", icon: <FaGithub /> },
      { label: "GitLab", icon: <FaGitlab /> },
    ],
  };

  return (
    <motion.section
      ref={ref}
      initial={sectionAnimation.initial}
      animate={sectionAnimation.animate}
      transition={sectionAnimation.transition}
      className="tools-section"
    >
      <motion.h2
        variants={sectionTitleAnimation.variants}
        transition={sectionTitleAnimation.transition}
        className="Technology-title"
      >
        Technologies
      </motion.h2>

      <div>
        <Segmented
          value={alignValue}
          style={{
            marginBottom: 8,
            width: "fit-content",
            backgroundColor: "#202021",
            padding: "6px 25px",
            borderRadius: "40px",
            color: "aliceblue",
            marginTop: "15px",
          }}
          onChange={setAlignValue}
          options={["frontend", "backend", "deployment"]}
        />
      </div>
      <motion.div className="tools-container">
        <motion.div
          initial={containerAnimation.initial}
          animate={containerAnimation.animate}
          transition={containerAnimation.transition}
          className="tools-right"
        >
          {categorizedIcons[alignValue]?.map((item, index) => (
            <Tooltip
              placement="bottomRight"
              title={item.label}
              key={index}
              color={"rgb(117 98 224)"}
            >
              <motion.div
                variants={gridItemAnimation.variants}
                transition={gridItemAnimation.transition}
                className="tool-box"
                key={index}
              >
                {" "}
                {item.icon}{" "}
              </motion.div>
            </Tooltip>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Tools;
