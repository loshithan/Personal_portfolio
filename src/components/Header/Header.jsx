import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#1c1c3d',
      }}
    >
      <div style={{ float: 'left', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
        Loshithan Paramaguru
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end' }}
        items={[
          { key: 'about', label: <a href="#about">About Me</a> },
          { key: 'services', label: <a href="#services">Services</a> },
          { key: 'projects', label: <a href="#projects">Projects</a> },
          { key: 'contact', label: <a href="#contact">Contact</a> },
        ]}
      />
    </Header>
  );
}
