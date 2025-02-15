// src/components/Projects.jsx
import React from 'react';
import './project.css'
import{Button} from 'antd'
import { Carousel,Grid } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { useBreakpoint } = Grid;

// Function to split projects into chunks of 3
const chunkArray = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );
};
export default function Projects() {
  const projects = [
    { title: 'Twinder', description: 'A live Geolocation app for finding tweets.', link: '#' },
    { title: 'Events', description: 'A video streaming app with live Geolocation.', link: '#' },
    { title: 'Moove', description: 'Mobile app for instant pickup and drop-off.', link: '#' },
    { title: 'ShopEasy', description: 'E-commerce platform with AI recommendations.', link: '#' },
    { title: 'TaskFlow', description: 'Task management tool with Kanban boards.', link: '#' },
    { title: 'HealthTrack', description: 'Health monitoring app for fitness tracking.', link: '#' },
  ];
  const screens = useBreakpoint();
   // Group projects into slides of 3 items each
   const projectChunks =screens.lg?chunkArray(projects, 3): screens.md?chunkArray(projects, 2): screens.sm? chunkArray(projects, 2):chunkArray(projects, 1);

  return (
    <section id="projects" style={{ padding: '4rem 2rem' }}>
    <h2 className="project-title">Projects</h2>
    <div style={{ maxWidth: '900px', margin: 'auto' }}>
      <Carousel autoplay dots arrows speed={3000}>
        {projectChunks.map((chunk, index) => (
          <div key={index} className="carousel-slide">
            <div className="project-group">
              {chunk.map((project, idx) => (
                <div key={idx} className="project-box">
                  <p className='title'>{project.title}</p>
                  <p>{project.description}</p>
                  <div  style={{ display: 'flex', gap: '10px',marginTop:'3rem' }}>
                    <Button type="primary" href={project.link} style={{ backgroundColor: '#6c63ff', border: 'none' }}>
                      View Project
                    </Button>
                    <Button type="default" href={project.link} style={{ border: '2px solid #fff', color: '#fff', backgroundColor: "transparent" }}>
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
  );
}