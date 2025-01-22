// src/components/Hero.jsx
import React from 'react';
import './hero.css'
export default function Hero() {
  return (
    <section className='hero-section' style={{padding: '4rem 2rem',textAlign:'left' }}>
      <h2 style={{marginTop:'0'}}>Hello, I’m</h2>
      <h1 style={{ fontSize: '3rem' }}>Loshithan Paramaguru</h1>
      <div className='hero-description'>
      <p>
        Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web
        experiences for end-users.
      </p>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button style={{ margin: '0 1rem', padding: '0.5rem 1rem', backgroundColor: '#6c63ff', border: 'none', color: '#fff', cursor: 'pointer' }}>About Me</button>
        <button style={{ margin: '0 1rem', padding: '0.5rem 1rem', backgroundColor: '#6c63ff', border: 'none', color: '#fff', cursor: 'pointer' }}>Projects</button>
      </div>
    </section>
  );
}