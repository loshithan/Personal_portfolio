// src/components/Services.jsx
import React, { useRef } from "react";
import "./service.css";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiBlazor } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import useAnimation from "../Hooks/CustomHooks";
import { motion, useInView } from "framer-motion";
import { AiOutlineGlobal, AiOutlineApi } from "react-icons/ai";
import { FaCloud, FaBrain, FaReact } from "react-icons/fa";

export default function Services() {
  const {
    sectionTitleAnimation,
    sectionAnimation,
    ref,
    containerAnimation,
    gridItemAnimation,
  } = useAnimation();
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "I build scalable web applications using .NET (ASP.NET Core, MVC, Blazor) with modern frontend frameworks like React, Angular, and Vue.",
      icon: <AiOutlineGlobal />,
    },
    {
      title: "Backend Development & API Design",
      description:
        "I design and implement high-performance APIs using ASP.NET Web API, with database management using SQL Server, PostgreSQL, or MongoDB.",
      icon: <AiOutlineApi />,
    },
    {
      title: "Cloud & DevOps Solutions",
      description:
        "I deploy applications on Azure, AWS, and Google Cloud, and set up CI/CD pipelines using GitHub Actions, Azure DevOps, or Jenkins.",
      icon: <FaCloud />,
    },
    {
      title: "Machine Learning Solutions",
      description:
        "I develop AI-powered applications using ML.NET, TensorFlow, or PyTorch, focusing on predictive analytics, recommendation systems, and automation tools.",
      icon: <FaBrain />,
    },
    {
      title: "Mobile App Development",
      description:
        "I build cross-platform mobile applications using .NET MAUI, Flutter, or React Native, integrating backend APIs for real-time data synchronization.",
      icon: <AiFillAndroid />,
    },
    {
      title: "UI/UX & Frontend Development",
      description:
        "I design and develop interactive, responsive web interfaces using React, Angular, or Blazor for seamless user experiences.",
      icon: <FaReact />,
    },
    {
      title: "Enterprise Software & SaaS Development",
      description:
        "I develop ERP, CRM, and SaaS solutions using .NET, microservices architecture, and cloud integrations for B2B platforms.",
      icon: <SiBlazor />,
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
      <motion.div
        initial={containerAnimation.initial}
        animate={containerAnimation.animate}
        transition={containerAnimation.transition}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            variants={gridItemAnimation.variants}
            transition={gridItemAnimation.transition}
            key={index}
            className="flex flex-col items-center justify-center border-2 border-gray-300 p-6 rounded-lg transition duration-300 hover:shadow-lg hover:border-blue-500"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3
              className="font-black mb-2
"
            >
              {service.title}
            </h3>
            <p className="text-[#b6babe]">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
