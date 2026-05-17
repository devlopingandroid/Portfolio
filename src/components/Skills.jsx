import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React / React Native', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js / Express', level: 75 },
  { name: 'AI/ML Integration', level: 80 },
  { name: 'CSS / Tailwind', level: 88 },
  { name: 'MongoDB / Firebase', level: 72 },
  { name: 'Python', level: 70 },
  { name: 'Vite / Build Tools', level: 78 },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">My Skills</h2>
        <p style={{ color: 'var(--secondary-color)', maxWidth: '800px', marginBottom: '2rem' }}>
          A curated list of my technical skills and tools I use on a daily basis.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '16px 60px', 
          width: '100%',
          marginTop: '3rem' 
        }}>
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ width: '100%' }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '10px'
              }}>
                <span style={{ 
                  color: 'white', 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px' 
                }}>
                  {skill.name}
                </span>
                <span style={{ 
                  color: 'white', 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px' 
                }}>
                  {skill.level}%
                </span>
              </div>
              
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #00d4aa, #0099ff)',
                    borderRadius: '4px'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
