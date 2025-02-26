// // src/components/About.jsx
// import React, { useRef } from "react";
// import "./about.css";
// import { Row, Col, Button } from "antd";
// import { motion, stagger, useInView } from "framer-motion";
// import { ClockCircleOutlined } from "@ant-design/icons";
// import { Timeline, Popover } from "antd";
// import TimelineWithPopover from "./TimelineWithPopover";
// export default function About() {
//   const titleRef = useRef();
//   const textRef = useRef();
//   const numberRef = useRef();
//   const yearsRef = useRef();

//   const isTitleInView = useInView(titleRef, { amount: 0.3, once: false });
//   const isTextInView = useInView(textRef, { amount: 0.3, once: false });
//   const isNumberInView = useInView(numberRef, { amount: 0.3, once: false });
//   const isYearsInView = useInView(yearsRef, { amount: 0.3, once: false });
//   return (
//     <motion.section
//       id="about"
//       style={{
//         padding: "4rem 2rem",

//         // height: "100vh", // Ensure it takes full viewport height
//       }}
//     >
//       <motion.h2
//         ref={titleRef}
//         initial={{ opacity: 0, y: "-200" }}
//         animate={{
//           opacity: isTitleInView ? 1 : 0,
//           y: isTitleInView ? 0 : "-200",
//         }}
//         transition={{
//           duration: 0.5, // Slower animation for a gradual effect
//           ease: "linear",
//         }}
//         className="about-me"
//       >
//         About Me
//       </motion.h2>
//       <motion.div
//         className="about-content"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           // flexGrow: 1, // Takes the remaining space
//           // minHeight: 0, // Ensures content doesn't overflow
//         }}
//         variants={{
//           visible: { transition: { staggerChildren: 0.3 } },
//           hidden: {},
//         }}
//       >
//         <motion.p
//           className="about-text"
//           style={{ maxWidth: "600px" }}
//           ref={textRef}
//           initial={{ opacity: 0, y: "-200" }}
//           animate={{
//             opacity: isTextInView ? 1 : 0,
//             y: isTextInView ? 0 : "-200",
//           }}
//           transition={{
//             duration: 1, // Slower animation for a gradual effect
//             ease: "easeIn",
//             delay: 0.5, // Delay the animation
//           }}
//         >
//           Hi, my name is Loshithan. I am a Fullstack web developer, UI designer,
//           and Mobile developer. I have honed my skills in Web Development and
//           advanced UI design principles.
//         </motion.p>
//         <motdiv
//           className="about-text2"
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           <motion.p
//             ref={numberRef}
//             variants={{
//               hidden: { opacity: 0, x: -50 },
//               visible: { opacity: 1, x: 0 },
//             }}
//             transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
//             style={{ fontSize: "4rem", fontWeight: "bolder" }}
//           >
//             5+
//           </motion.p>{" "}
//           <motion.p
//             ref={yearsRef}
//             variants={{
//               hidden: { opacity: 0, x: 50 },
//               visible: { opacity: 1, x: 0 },
//             }}
//             transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
//             style={{ fontSize: "1.1rem", fontWeight: 600 }}
//             className=" font"
//           >
//             Years of Experience
//           </motion.p>
//         </motdiv>
//         <div className=" relative w-full min-h-[70vh]">
//           <TimelineWithPopover />
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// }
import React, { useRef } from "react";
import "./about.css";
import { motion, useInView } from "framer-motion";
import TimelineWithPopover from "./TimelineWithPopover";

export default function About() {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ padding: "4rem 2rem" }}
    >
      {/* Wrap animations in motion.div for staggerChildren */}
      <motion.div 
        className="about-container"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
          hidden: {}
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Animated Heading */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="about-me"
        >
          About Me
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="about-text"
          style={{ maxWidth: "600px" }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
        >
          Hi, my name is Loshithan. I am a Fullstack web developer, UI designer, 
          and Mobile developer. I have honed my skills in Web Development and 
          advanced UI design principles.
        </motion.p>

        {/* Experience Block */}
        <motion.div 
          className="about-text2"
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
            style={{ fontSize: "4rem", fontWeight: "bolder" }}
          >
            5+
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
            style={{ fontSize: "1.1rem", fontWeight: 600 }}
          >
            Years of Experience
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative w-full min-h-[130vh]"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          <TimelineWithPopover />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
