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
        // Input: {
        //   colorPrimary: '#eb2f96',
        //   algorithm: true, // Enable algorithm
        // }
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
      </Content>
      <AntFooter style={{ textAlign: 'center' }}>©2025 Loshithan Paramaguru</AntFooter>
    </Layout>
    </ConfigProvider>
  );
}

export default App;
