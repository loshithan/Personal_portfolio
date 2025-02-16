// import React from "react";
// import { Layout, Menu,Grid,theme,Button } from "antd";
// import "./header.css";
// import { motion } from "framer-motion";
// import { MenuOutlined } from "@ant-design/icons";

// const { Header } = Layout;
// const { useToken } = theme;

// export default function AppHeader() {
//   const{useBreakpoint} = Grid;
//   const { token } = useToken();
//   const screens = useBreakpoint();

//   return (
//     <Header
//       style={{
//         position: "sticky",
//         top: 0,
//         width: "100%",
//         zIndex: 1,
//         backgroundColor: "var(--secondary-color) !important",
//       }}
//     >
//       <motion.div
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//         style={{
//           float: "left",
//           color: "var(--primary-color)",
//           fontSize: "20px",
//           fontWeight: "bold",
//         }}
//       >
//         Loshithan Paramaguru
//       </motion.div>

//       <Menu
//         theme="dark"
//         mode="horizontal"
//         style={{
//           marginLeft: "auto",
//           display: "flex",
//           justifyContent: "flex-end",
//           backgroundColor: "var(--secondary-color)", // setting the custom background color
//         }}
//         items={[
//           {
//             key: "about",
//             label: (
//               <motion.div
//                 href="#about"
//                 className="menu-item"
//                 initial={{ y: -100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//               >
//                 About Me
//               </motion.div>
//             ),
//           },
//           {
//             key: "services",
//             label: (
//               <motion.div
//                 href="#services"
//                 className="menu-item"
//                 initial={{ y: -100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//               >
//                 Services
//               </motion.div>
//             ),
//           },
//           {
//             key: "projects",
//             label: (
//               <motion.div
//                 href="#projects"
//                 className="menu-item"
//                 initial={{ y: -100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//               >
//                 Projects
//               </motion.div>
//             ),
//           },
//           {
//             key: "contact",
//             label: (
//               <motion.div
//                 href="#contact"
//                 className="menu-item"
//                 initial={{ y: -100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//               >
//                 Contact
//               </motion.div>
//             ),
//           },
//         ]}
//         // selectedKeys={screens.md ? [current] : ""}
//             overflowedIndicator={
//               <Button type="text" icon={<MenuOutlined />}></Button>
//             }
//       />
//     </Header>
//   );
// }

import React, { useState } from "react";
import { Layout, Menu, Grid, theme, Button, Drawer } from "antd"; // Import Drawer
import "./header.css";
import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";
import { header } from "motion/react-client";

const { Header } = Layout;
const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function AppHeader() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const [current, setCurrent] = useState("about");
  const [visible, setVisible] = useState(false); // State for Drawer visibility

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (e) => {
    setCurrent(e.key);
    setVisible(false); // Close drawer after item click
  };

  const menuItems = [
    {
      key: "about",
      label: (
        <motion.div
          href="#about"
          className="menu-item"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          About Me
        </motion.div>
      ),
    },
    {
      key: "services",
      label: (
        <motion.div
          href="#services"
          className="menu-item"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          Services
        </motion.div>
      ),
    },
    {
      key: "projects",
      label: (
        <motion.div
          href="#projects"
          className="menu-item"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          Projects
        </motion.div>
      ),
    },
    {
      key: "contact",
      label: (
        <motion.div
          href="#contact"
          className="menu-item"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          Contact
        </motion.div>
      ),
    },
  ];

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 1,
        backgroundColor: "var(--secondary-color) !important",
      }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        style={{
          float: "left",
          color: "var(--primary-color)",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        className="logo-name"
      >
        Loshithan Paramaguru
      </motion.div>

      {screens.md ? (
        <Menu // Desktop Menu (unchanged)
          theme="dark"
          mode="horizontal"
          selectedKeys={[current]}
          onClick={handleMenuClick}
          style={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "var(--secondary-color)",
          }}
          items={menuItems}
        />
      ) : (
        <>
          {" "}
          {/* Fragment to wrap button and drawer */}
          <Button // Hamburger Button
            type="text"
            icon={<MenuOutlined style={{border:'none'}} />}
            onClick={showDrawer}
            style={{ marginLeft: "auto", color: "var(--primary-color)",float:"right",position:'absolute',top:'16px',right:0,border:'none',outline:'none' }} // Style the button
          />
          <Drawer // Mobile Drawer
            title="Menu"
            placement="right"
            closable={true}
            onClose={onClose}
            open={visible}
            style={{
              header: {
                fontSize: "1.5rem",
                fontWeight: 600,
              },
              backgroundColor: "var(--secondary-color)",
              color: "var(--text-color)"
            }}
                      >
            <Menu
              theme="dark"
              mode="vertical" // Vertical menu in the drawer
              selectedKeys={[current]}
              onClick={handleMenuClick}
              style={{
                backgroundColor: "var(--secondary-color)",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
              items={menuItems}
            />
          </Drawer>
        </>
      )}
    </Header>
  );
}
