// src/components/Projects.jsx
import React, { useEffect } from "react";
import "./project.css";
import { Button } from "antd";
import { Carousel, Grid } from "antd";
import useAnimation from "../Hooks/CustomHooks";
import { motion } from "framer-motion";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const { useBreakpoint } = Grid;

// Function to split projects into chunks of 3
const chunkArray = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );
};
export default function Projects() {
  const {
    sectionTitleAnimation,
    sectionAnimation,
    ref,
    containerAnimation,
    gridItemAnimation,
  } = useAnimation();
  const getChunkAnimation = (
    chunkIndex,
    totalChunks = screens.lg ? 3 : screens.md ? 2 : screens.sm ? 2 : 3
  ) => {
    console.log(screens, "screens");

    if (totalChunks === 1) {
      // Single chunk - from bottom
      return {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
      };
    } else if (totalChunks === 2) {
      // Two chunks - left and right
      return chunkIndex === 0
        ? {
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          }
        : {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
          };
    } else if (totalChunks === 3) {
      // Three chunks - left, bottom, and right
      return chunkIndex === 0
        ? {
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
          }
        : chunkIndex === 1
        ? {
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          }
        : chunkIndex === 2
        ? {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
          }
        : {
            initial: {},
            animate: {},
            transition: {},
          };
    }
  };
  const projects = [
    {
      title: "Empfee UI",
      techStack: ["React", "Next.js", "Tailwind CSS", "Ant Design"],
      description:
        "A responsive and interactive UI that allows HR teams to collect employee feedback, manage forms, and visualize insights using dynamic charts.",
      features: [
        "Employee form submission",
        "Real-time data visualization",
        "Authentication and authorization",
        "Dark mode support",
      ],
      link: "#",
    },
    {
      title: "Empfee Backend",

      techStack: [".NET Core", "Node.js (Express)", "PostgreSQL"],
      description:
        "Handles API requests, user authentication, and securely stores employee feedback data for further analysis.",
      features: [
        "User authentication (JWT-based)",
        "RESTful APIs for form management",
        "Database integration with PostgreSQL",
        "Role-based access control",
      ],
      link: "#",
    },
    {
      title: "Empfee ML",
      techStack: ["Python", "FastAPI", "TensorFlow/PyTorch", "Scikit-learn"],
      description:
        "A machine learning service that processes employee feedback using NLP techniques to determine sentiment and engagement levels.",
      features: [
        "Sentiment analysis using NLP",
        "Topic modeling for employee concerns",
        "Predictive analytics for HR decision-making",
        "API endpoints for real-time data processing",
      ],
      link: "#",
    },
    {
      title: "ScholarX UI",
      techStack: ["Python", "FastAPI", "TensorFlow/PyTorch", "Scikit-learn"],
      description:"An open-source GitHub project providing tools and resources to enhance and innovate educational experiences.",
      features: [
        "Sentiment analysis using NLP",
        "Topic modeling for employee concerns",
        "Predictive analytics for HR decision-making",
        "API endpoints for real-time data processing",
      ],
      link: "#",
    },
    {
      title: "Personal portfolio",
      techStack: ["Python", "FastAPI", "TensorFlow/PyTorch", "Scikit-learn"],
      description:"web portfolio for personal branding and showcasing projects, skills, and achievements.",
      features: [
        "Sentiment analysis using NLP",
        "Topic modeling for employee concerns",
        "Predictive analytics for HR decision-making",
        "API endpoints for real-time data processing",
      ],
      link: "#",
    },
  ];
  const screens = useBreakpoint() || {};
  useEffect(() => {}, [screens]);
  console.log(screens, "screens");

  // Group projects into slides of 3 items each
  const projectChunks = screens.lg
    ? chunkArray(projects, 3)
    : screens.md
    ? chunkArray(projects, 2)
    : screens.sm
    ? chunkArray(projects, 2)
    : chunkArray(projects, 1);

  return (
    <motion.section
      ref={ref}
      initial={sectionAnimation.initial}
      animate={sectionAnimation.animate}
      transition={sectionAnimation.transition}
      id="projects"
      style={{ padding: "4rem 2rem" }}
    >
      <motion.h2
        variants={sectionTitleAnimation.variants}
        transition={sectionTitleAnimation.transition}
        className="project-title"
      >
        Projects
      </motion.h2>
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <Carousel autoplay dots speed={3000}>
          {projectChunks.map((chunk, index) => (
            <div key={index} className="carousel-slide">
              <motion.div
                initial={containerAnimation.initial}
                animate={containerAnimation.animate}
                transition={containerAnimation.transition}
                className="project-group"
              >
                {chunk.map((project, idx) => (
                  <motion.div
                    initial={getChunkAnimation(idx).initial}
                    animate={getChunkAnimation(idx)?.animate}
                    transition={getChunkAnimation(idx)?.transition}
                    viewport={{ once: true }}
                    key={idx}
                    className="project-box flex flex-col justify-between items-center"
                  >
                    <p className="title">{project.title}</p>
                    <p>{project.description}</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "3rem",
                      }}
                    >
                      <Button
                        type="primary"
                        href={project.link}
                        style={{ backgroundColor: "#6c63ff", border: "none" }}
                      >
                        View Project
                      </Button>
                      <Button
                        type="default"
                        href={project.link}
                        style={{
                          border: "2px solid #fff",
                          color: "#fff",
                          backgroundColor: "transparent",
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
}
