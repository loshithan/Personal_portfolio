// src/components/Hero.jsx
import React from 'react';
export default function Hero() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#0a0a23' }}>
      <h2>Hello, I’m</h2>
      <h1 style={{ fontSize: '3rem' }}>Loshithan Paramaguru</h1>
      <p>
        Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web
        experiences for end-users.
      </p>
      <div style={{ marginTop: '1rem' }}>
        <button style={{ margin: '0 1rem', padding: '0.5rem 1rem', backgroundColor: '#6c63ff', border: 'none', color: '#fff', cursor: 'pointer' }}>About Me</button>
        <button style={{ margin: '0 1rem', padding: '0.5rem 1rem', backgroundColor: '#6c63ff', border: 'none', color: '#fff', cursor: 'pointer' }}>Projects</button>
      </div>
    </section>
  );
}