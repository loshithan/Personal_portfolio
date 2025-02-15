import './App.css';
import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Tools from './components/Tools/Tools';
import Contact from './components/Contact/Contact';

const { Content, Footer: AntFooter } = Layout;

function App() {
  return (
    <ConfigProvider
    theme={{
      components: {
        Segmented: {
          itemSelectedBg:"var(--primary-color)",
          algorithm: true, // Enable algorithm
        },
        Carousel: {
          arrowSize:32,
          dotGap:8,
          arrowOffset	:0,
          dotOffset:0
        },
        Menu:{
          darkItemSelectedBg:"transparent"
        },
        Header:{
          headerBg:"var(--secondary-color)"
        }
      },
    }}>
    <Layout>
      <AppHeader />
      <Content >
        <Hero />
        <About />
        <Services />
        <Tools/>
        <Projects />
        <Contact/>
      </Content>
      <AntFooter style={{ textAlign: 'center',backgroundColor:'var(--secondary-color)',color:'var(--text-color)' }}>  <p>© 2025 Loshithan Paramaguru. All rights reserved.</p>
      </AntFooter>
    </Layout>
    </ConfigProvider>
  );
}

export default App;
