// src/components/Projects.jsx
import React from 'react';
export default function Projects() {
  const projects = [
    { title: 'Twinder', description: 'A live Geolocation app for finding tweets.', link: '#' },
    { title: 'Events', description: 'A video streaming app with live Geolocation.', link: '#' },
    { title: 'Moove', description: 'Mobile app for instant pickup and drop-off.', link: '#' },
  ];

  return (
    <section id="projects" style={{ padding: '4rem 2rem'}}>
      <h2>Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #6c63ff', padding: '1rem', margin: '1rem', width: '30%' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} style={{ color: '#6c63ff' }}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}