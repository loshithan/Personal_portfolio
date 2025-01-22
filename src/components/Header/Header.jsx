import React from "react";
import { Layout, Menu } from "antd";
import './header.css'

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 1,
        backgroundColor:'var(--secondary-color) !important'
       
      }}
    >
      <div
        style={{
          float: "left",
          color: "var(--primary-color)",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Loshithan Paramaguru
      </div>
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
              <a href="#about" className="menu-item">
                About Me
              </a>
            ),
          },
          {
            key: "services",
            label: (
              <a href="#services" className="menu-item">
                Services
              </a>
            ),
          },
          {
            key: "projects",
            label: (
              <a href="#projects" className="menu-item">
                Projects
              </a>
            ),
          },
          {
            key: "contact",
            label: (
              <a href="#contact" className="menu-item">
                Contact
              </a>
            ),
          },
        ]}
      />
    </Header>
  );
}
