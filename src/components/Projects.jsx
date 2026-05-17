import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">My Projects</h2>
        <p style={{ color: 'var(--secondary-color)', marginBottom: '2rem' }}>
          Here are a few recent projects I've worked on.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[1, 2, 3].map(item => (
            <div key={item} style={{
              height: '250px',
              backgroundColor: 'var(--hover-color)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--secondary-color)'
            }}>
              Project {item} Placeholder
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
