import React, { useRef,useEffect } from "react";
import "./hero.css";
import { Row, Col, Grid } from "antd";
import { motion, useInView } from "framer-motion";
const { useBreakpoint } = Grid;

export default function Hero() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const screens = useBreakpoint();

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
  useEffect(() => {
    // Function to load the Chatbase script
    const loadChatbase = () => {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args) => {
          if (!window.chatbase.q) window.chatbase.q = [];
          window.chatbase.q.push(args);
        };
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") return target.q;
            return (...args) => target(prop, ...args);
          },
        });
      }

      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "02s-AzAsDYJPCwwyoeDNV";
      script.domain = "www.chatbase.co";
      document.body.appendChild(script);
    };

    // Load Chatbase when component mounts
    if (document.readyState === "complete") {
      loadChatbase();
    } else {
      window.addEventListener("load", loadChatbase);
    }

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("load", loadChatbase);
    };
  }, []);
  return (
    <section
      className="hero-section"
      style={{ padding: "4rem 2rem", textAlign: "left" }}
    >
      <Row align="middle" gutter={[16, 16]} justify="center">
        <Col xs={24} md={24} lg={12} ref={ref}>
          <motion.h2
            variants={variant}
            transition={transition}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Hello, I’m
          </motion.h2>
          <motion.h1
            variants={variant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={transition}
            style={{ fontSize: "3rem" }}
          >
            Loshithan Paramaguru
            <span style={{ color: "var(--primary-color)" }}>.</span>
          </motion.h1>
          <motion.h3
            variants={variant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ fontSize: "2rem" }}
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
                size={screens.sm ? "small" : "large"}
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
                    <div className="flex items-center gap-2">
                      About me
                      <motion.span
                        variants={firstTextVariant}
                        style={{ fontSize: "1.2rem" }}
                        className="material-icons"
                      >
                        person
                      </motion.span>
                    </div>
                  </motion.p>

                  <motion.p
                    variants={secondTextVariant}
                    aria-hidden
                    style={{ margin: 0, fontWeight: 700 }}
                    className="absolute top-0 left-0 "
                  >
                    <div className="flex items-center gap-2">
                      About me
                      <motion.span
                        variants={secondTextVariant}
                        aria-hidden
                        style={{ fontSize: "1.2rem" }}
                        className=" material-icons "
                      >
                        person
                      </motion.span>
                    </div>
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
                    <div className="flex items-center gap-2">
                      Projects{" "}
                      <motion.span
                        class="material-icons"
                        style={{ fontSize: "1.2rem" }}
                        variants={firstTextVariant}
                      >
                        visibility
                      </motion.span>
                    </div>
                  </motion.p>
                  <motion.p
                    style={{ margin: 0, fontWeight: 700 }}
                    aria-hidden
                    className="absolute top-0 left-0 "
                    variants={secondTextVariant}
                  >
                    <div className="flex items-center gap-2">
                      Projects{" "}
                      <motion.span
                        class="material-icons "
                        aria-hidden
                        style={{ fontSize: "1.2rem" }}
                        variants={secondTextVariant}
                      >
                        visibility
                      </motion.span>
                    </div>
                  </motion.p>
                </div>
              </motion.button>
            </Row>
          </div>
        </Col>
        <Col
          xs={24}
          md={24}
          lg={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <motion.img
            src="/assets/profile.png"
            alt="circle"
            style={{
              height: "400px",
              maxWidth: "100%",
              objectFit: "cover",
            }}
            // initial={{ scale: 0, opacity: 0 }}
            // animate={{ scale: 1, opacity: 1 }}
            // transition={{ duration: 2, ease: "easeInOut" }}
          />
        </Col>
      </Row>    

    </section>
  );
}
