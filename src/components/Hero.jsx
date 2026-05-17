import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import heroBg from "../assets/hero_back.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-container"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-content">

        <motion.span
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
        >
          Hello, I'm
        </motion.span>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5, delay: .2 }}
        >
          Yash Goel
        </motion.h1>

        <motion.div
          className="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5, delay: .4 }}
        >
          <span>I'm </span>
          <TypeAnimation
            sequence={[
              "AI Builder",
              1500,
              "Full Stack Developer",
              1500,
              "Freelancer",
              1500,
              "React Native Developer",
              1500,
              "ML Enthusiast",
              1500
            ]}
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;