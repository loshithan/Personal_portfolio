// src/components/Services.jsx
import React from "react";
import "./service.css";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiBlazor } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";


export default function Services() {
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
    <section id="services" style={{ padding: "4rem 2rem" }}>
      <h2 className="service-title">Services</h2>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {services.map((service, index) => (
          <div
          className="service-box"
            key={index}
            style={{
              border: "2px solid",
              padding: "1rem",
              margin: "1rem",
              width: "25%",
              borderRadius: "5%",
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
            }}
          >
            <div style={{ fontSize: "4rem" }}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div> */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 border-gray-300 p-6 rounded-lg transition duration-300 hover:shadow-lg hover:border-blue-500"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 >{service.title}</h3>
            <p >{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
