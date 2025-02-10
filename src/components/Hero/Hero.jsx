// src/components/Hero.jsx
import React, { useRef } from "react";
import "./hero.css";
import { Row, Col, Button } from "antd";
import { color, motion, stagger, useInView } from "framer-motion";
export default function Hero() {
  const ref = useRef();
  const isInView = useInView(ref, { once: "true" });
  const variant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const transition = { duration: 0.5, ease: "easeOut" };
  const backgroundVariantBtn = {
    initial: {
      backgroundColor: "#6c63ff",
      color: "#fff",
    },
    hover: {
      backgroundColor: "#fff",
      color: "#6c63ff",
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      backgroundColor: "#6c63ff",
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };
  const firstTextVariant = {
    initial: {
      y: 0,
    },
    hover: {
      y: -30,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };
  const secondTextVariant = {
    initial: {
      y: 20,
    },
    hover: {
      y: 0,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      y: 20,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };
  const outlineBackgroundVariantBtn = {
    initial: {
      backgroundColor: "#fff",
      color: "black",
    },
    hover: {
      backgroundColor: "transparent",
      color: "#fff",
      transition: {
        delay: 0,
        duration: 0.1,
        ease: [0.19, 1, 0.22, 1],
      },
      borderColor: "#fff",
    },
    animate: {
      backgroundColor: "#fff",
      transition: {
        delay: 0.1,
        duration: 0.1,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

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
          repeatType: "loop",
        }}
      >
        {" "}
        FULLSTACK DOTNET DEVELOPER{" "}
      </motion.div>{" "}
      <Row align={"middle"} gutter={[16, 16]} style={{ gap: "20px" }}>
        <Col ref={ref}>
          <motion.h2
            variants={variant}
            transition={transition}
            initial={"hidden"}
            animate={"visible"}
            style={{ marginTop: "0" }}
          >
            Hello, I’m
          </motion.h2>
          <motion.h1
            variants={variant}
            initial={"hidden"}
            animate={"visible"}
            transition={transition}
            style={{ fontSize: "3rem" }}
          >
            Loshithan Paramaguru
            <span style={{ color: "var(--primary-color)" }}>.</span>
          </motion.h1>
          <motion.h3
            variants={variant}
            initial={"hidden"}
            animate={"visible"}
            style={{ fontSize: "3rem" }}
            transition={transition}
          >
            <span style={{ color: "GrayText" }}>I'm a</span>{" "}
            <span style={{ color: "var(--primary-color)" }}>
              Full Stack Developer
            </span>
          </motion.h3>
          <div style={{ marginTop: "2rem" }}>
            <Row gutter={16} style={{ marginLeft: "-16px" }}>
              <motion.button
                size="large"
                style={{
                  margin: "0 1rem",
                  padding: "0.5rem 1rem",
                  border: "none",
                  cursor: "pointer",
                  display: "flex", // Use flexbox for alignment
                  alignItems: "center",
                  justifyContent: "space-between", // Adjust spacing between items
                }}
                type="default"
                initial="initial"
                whileHover="hover"
                animate="animate"
                variants={backgroundVariantBtn}
              >
                <div className="overflow-hidden relative">
                  <motion.p
                    variants={firstTextVariant}
                    style={{ margin: 0, fontWeight: 700 }}
                  >
                    About me
                    <motion.span
                      variants={firstTextVariant}
                      style={{ fontSize: "1.2rem" }}
                      className=" material-icons "
                    >
                      person
                    </motion.span>
                  </motion.p>

                  <motion.p
                    variants={secondTextVariant}
                    aria-hidden
                    style={{ margin: 0, fontWeight: 700 }}
                    className="absolute top-0 left-0 "
                  >
                    About me
                    <motion.span
                      variants={secondTextVariant}
                      aria-hidden
                      style={{ fontSize: "1.2rem" }}
                      className=" material-icons "
                    >
                      person
                    </motion.span>
                  </motion.p>
                </div>
              </motion.button>
              <motion.button
                size="large"
                style={{
                  margin: "0 1rem",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  display: "flex", // Use flexbox for alignment
                  alignItems: "center",
                  justifyContent: "space-between", // Adjust spacing between items
                }}
                initial="initial"
                whileHover="hover"
                animate="animate"
                variants={outlineBackgroundVariantBtn}
                type="default"
                // variant="outlined"
              >
                <div className="overflow-hidden relative">
                  <motion.p
                    style={{ margin: 0, fontWeight: 700 }}
                    variants={firstTextVariant}
                  >
                    Projects{" "}
                    <motion.span
                      class="material-icons"
                      style={{ fontSize: "1.2rem" }}
                      variants={firstTextVariant}
                    >
                      visibility
                    </motion.span>
                  </motion.p>
                  <motion.p
                    style={{ margin: 0, fontWeight: 700 }}
                    aria-hidden
                    className="absolute top-0 left-0 "
                    variants={secondTextVariant}
                  >
                    Projects{" "}
                    <motion.span
                      class="material-icons "
                      aria-hidden
                      style={{ fontSize: "1.2rem" }}
                      variants={secondTextVariant}
                    >
                      visibility
                    </motion.span>
                  </motion.p>
                </div>
              </motion.button>
            </Row>
          </div>
        </Col>
        <Col>
          <div>
            {" "}
            <motion.img
              src="src/assets/circle.png"
              alt="circle"
              style={{ height: "400px" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />{" "}
          </div>{" "}
        </Col>
      </Row>
    </section>
  );
}
