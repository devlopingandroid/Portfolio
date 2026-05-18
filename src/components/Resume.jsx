import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {

  const timelineItem = (title, period, subtitle, points) => (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: '14px', height: '14px', borderRadius: '50%',
          border: '2px solid #00d4aa', background: 'transparent',
          marginTop: '4px', flexShrink: 0
        }} />
        <div style={{ width: '2px', flex: 1, background: 'rgba(0,212,170,0.3)', marginTop: '6px' }} />
      </div>
      <div style={{ paddingBottom: '8px' }}>
        <h4 style={{ color: '#1a1a2a', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.5px', marginBottom: '4px' }}>{title}</h4>
        <span style={{ color: '#00d4aa', fontSize: '0.82rem', fontWeight: 600 }}>{period}</span>
        {subtitle && <p style={{ color: '#444', fontStyle: 'italic', fontSize: '0.85rem', margin: '4px 0 8px' }}>{subtitle}</p>}
        {points && (
          <ul style={{ margin: 0, paddingLeft: '18px' }}>
            {points.map((p, i) => (
              <li key={i} style={{ color: '#444', fontSize: '0.88rem', marginBottom: '4px', lineHeight: 1.6 }}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <section id="resume" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Resume</h2>
        <p style={{ color: '#666', marginBottom: '48px' }}>
          My academic background, experience, projects and achievements.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 60px' }}>

          <div>
            <h3 style={{ color: '#1a1a2a', fontSize: '1.3rem', marginBottom: '24px', borderBottom: '2px solid #00d4aa', paddingBottom: '8px' }}>Summary</h3>
            {timelineItem('Yash Goel', 'B.Tech IIOT — 2024 to 2028', 'Vivekananda Institute of Professional Studies — Technical Campus | CGPA: 9.17', ['yashgoel15119@gmail.com', '+91 8059598001', 'Delhi, India', 'Freelance: Available'])}

            <h3 style={{ color: '#1a1a2a', fontSize: '1.3rem', margin: '8px 0 24px', borderBottom: '2px solid #00d4aa', paddingBottom: '8px' }}>Education</h3>
            {timelineItem('B.Tech — IIOT', 'Aug 2024 – July 2028', 'Vivekananda Institute of Professional Studies, Delhi', ['CGPA: 9.17'])}
            {timelineItem('Class XII — CBSE', 'Apr 2021 – Mar 2024', 'Geeta Vidya Mandir Public School, Panipat', ['Class X: 80% | Class XII: 86.2%'])}

            <h3 style={{ color: '#1a1a2a', fontSize: '1.3rem', margin: '8px 0 24px', borderBottom: '2px solid #00d4aa', paddingBottom: '8px' }}>Achievements</h3>
            {timelineItem('Top 100 Winner — College Youth Ideathon 2025', 'IIT Delhi — 13,000+ teams', null, null)}
            {timelineItem('3rd Position — SIH Internal Hackathon', 'VIPS New Delhi', null, null)}
            {timelineItem('4th Position — AURATHON 2025', 'GTBIT New Delhi', null, null)}
          </div>

          <div>
            <h3 style={{ color: '#1a1a2a', fontSize: '1.3rem', marginBottom: '24px', borderBottom: '2px solid #00d4aa', paddingBottom: '8px' }}>Experience</h3>
            {timelineItem('Summer Research Intern — IIIT Delhi', 'June 2025 – Aug 2025', null, ['Collected and analyzed real-time physiological data from a wearable device monitoring 6 vital parameters (HR, SpO₂, temperature, GSR, BP, sleep)', 'Performed data preprocessing, noise filtering, and feature extraction on multi-sensor health signals', 'Applied statistical analysis to identify trends and anomalies in vital signs'])}


            <h3 style={{ color: '#1a1a2a', fontSize: '1.3rem', margin: '8px 0 24px', borderBottom: '2px solid #00d4aa', paddingBottom: '8px' }}>Research & Patents</h3>
            {timelineItem('Green Materials Research', 'IIPA Campus — International Conference', null, null)}
            {timelineItem('Patent — AI-Driven Intelligent Traffic Management System', 'Accepted', null, null)}
            {timelineItem('SmartEye: IoT & FPGA-Accelerated Framework', 'Real-Time Traffic Surveillance', null, null)}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Resume;