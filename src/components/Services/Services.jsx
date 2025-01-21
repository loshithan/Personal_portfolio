// src/components/Services.jsx
import React from 'react';
export default function Services() {
  const services = [
    { title: 'UI & UX Designing', description: 'I design beautiful web interfaces with Figma and Adobe XD.' },
    { title: 'Web Development', description: 'I create beautiful interfaces with HTML, CSS, & JS.' },
    { title: 'Mobile Development', description: 'I use Flutter and React Native to build apps.' },
  ];

  return (
    <section id="services" style={{ padding: '4rem 2rem', backgroundColor: '#0a0a23' }}>
      <h2>Services</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {services.map((service, index) => (
          <div key={index} style={{ border: '1px solid #6c63ff', padding: '1rem', margin: '1rem', width: '30%' }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}