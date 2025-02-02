import React from "react";
import { Layout, Menu } from "antd";
import "./header.css";
import { motion } from "framer-motion";

const { Header } = Layout;

export default function AppHeader() {
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
      >
        Loshithan Paramaguru
      </motion.div>

      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          marginLeft: "auto",
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "var(--secondary-color)", // setting the custom background color
        }}
        items={[
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
        ]}
      />
    </Header>
  );
}
