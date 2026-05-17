import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import yashImg from "../assets/yash.jpg";

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>

        <p style={{ color: 'var(--secondary-color)', maxWidth: '100%', fontSize: '1.1rem', marginBottom: '40px' }}>
          Hello! I'm Yash Goel, a passionate developer building modern web and mobile applications.
          I specialize in React, React Native, and implementing AI-driven solutions. With a keen eye
          for design and a drive for performance, I create digital experiences that are both beautiful
          and functional.
        </p>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          <div style={{ flex: '1 1 380px', maxWidth: '380px', height: '500px', margin: '0 auto' }}>
            <img
              src={yashImg}
              alt="Yash Goel"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            />
          </div>

          <div style={{ flex: '1 1 60%', minWidth: '300px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '10px', color: 'white' }}>
              AI Builder & Full Stack Developer.
            </h3>

            <p style={{ fontStyle: 'italic', color: 'var(--secondary-color)', marginBottom: '20px' }}>
              Turning complex problems into elegant, user-friendly solutions using cutting-edge technologies.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: '20px' }}>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiChevronRight style={{ color: '#00d4aa', fontWeight: 'bold' }} />
                <strong style={{ color: 'white', fontWeight: 600 }}>Birthday:</strong>
                <span style={{ color: '#aaa' }}>3 September 2006</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiChevronRight style={{ color: '#00d4aa', fontWeight: 'bold' }} />
                <strong style={{ color: 'white', fontWeight: 600 }}>Age:</strong>
                <span style={{ color: '#aaa' }}>19</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiChevronRight style={{ color: '#00d4aa', fontWeight: 'bold' }} />
                <strong style={{ color: 'white', fontWeight: 600 }}>Degree:</strong>
                <span style={{ color: '#aaa' }}>B.Tech</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiChevronRight style={{ color: '#00d4aa', fontWeight: 'bold' }} />
                <strong style={{ color: 'white', fontWeight: 600 }}>Phone:</strong>
                <span style={{ color: '#aaa' }}>+91 8059598001</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiChevronRight style={{ color: '#00d4aa', fontWeight: 'bold' }} />
                <strong style={{ color: 'white', fontWeight: 600 }}>Email:</strong>
                <span style={{ color: '#aaa' }}>yashgoel15119@gmail.com</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiChevronRight style={{ color: '#00d4aa', fontWeight: 'bold' }} />
                <strong style={{ color: 'white', fontWeight: 600 }}>City:</strong>
                <span style={{ color: '#aaa' }}>Delhi, India</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiChevronRight style={{ color: '#00d4aa', fontWeight: 'bold' }} />
                <strong style={{ color: 'white', fontWeight: 600 }}>Freelance:</strong>
                <span style={{ color: '#aaa' }}>Available</span>
              </div>

            </div>

            <p style={{ color: 'var(--secondary-color)' }}>
              I am constantly exploring new technologies, frameworks, and architectural patterns to deliver high-performance applications.
              My goal is to create products that provide a seamless user experience while maintaining robust, scalable backends.
            </p>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
