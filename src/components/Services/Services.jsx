// src/components/Services.jsx
import React, { useRef } from "react";
import "./service.css";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiBlazor } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import useAnimation from "../Hooks/CustomHooks";
import { motion, useInView } from "framer-motion";

export default function Services() {
  const { sectionTitleAnimation,sectionAnimation,ref,containerAnimation,gridItemAnimation } = useAnimation();
  const services = [
    {
      title: "UI & UX Designing",
      description: "I design beautiful web interfaces with Figma and Adobe XD.",
      icon: <SiBlazor />,
    },
    {
      title: "Web Development",
      description:
        "I create beautiful interfaces with HTML, CSS, & JS.I create beautiful interfaces with HTML, CSS, & JS.",
      icon: <AiOutlineDotNet />,
    },
    {
      title: "Mobile Development",
      description: "I use Flutter and React Native to build apps.",
      icon: <FaReact />,
    },
    {
      title: "Mobile Development",
      description: "I use Flutter and React Native to build apps.",
      icon: <FaGitAlt />,
    },
    {
      title: "Mobile Development",
      description: "I use Flutter and React Native to build apps.",
      icon: <AiFillAndroid />,
    },
  ];

  return (
    <motion.section
      id="services"
      style={{ padding: "4rem 2rem" }}
      ref={ref}
      initial={sectionAnimation.initial}
      animate={sectionAnimation.animate}
      transition={sectionAnimation.transition}
    >
      <motion.h2
        variants={sectionTitleAnimation.variants}
        transition={sectionTitleAnimation.transition}
        className="service-title"
      >
        Services
      </motion.h2>      
      <motion.div initial={containerAnimation.initial} animate={containerAnimation.animate} transition={containerAnimation.transition} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            variants={gridItemAnimation.variants}
            transition={gridItemAnimation.transition}
            key={index}
            className="flex flex-col items-center justify-center border-2 border-gray-300 p-6 rounded-lg transition duration-300 hover:shadow-lg hover:border-blue-500"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
