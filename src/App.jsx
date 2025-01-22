import './App.css';
import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

const { Content, Footer: AntFooter } = Layout;

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content >
        <Hero />
        <About />
        <Services />
        <Projects />
      </Content>
      <AntFooter style={{ textAlign: 'center' }}>©2025 Loshithan Paramaguru</AntFooter>
    </Layout>
  );
}

export default App;
