import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiCode, FiBriefcase, FiFileText, FiMail, FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import yashImg from "../assets/yash.jpg";
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', to: 'home', icon: <FiHome className="icon" /> },
    { name: 'About', to: 'about', icon: <FiUser className="icon" /> },
    { name: 'Skills', to: 'skills', icon: <FiCode className="icon" /> },
    { name: 'Projects', to: 'projects', icon: <FiBriefcase className="icon" /> },
    { name: 'Resume', to: 'resume', icon: <FiFileText className="icon" /> },
    { name: 'Contact', to: 'contact', icon: <FiMail className="icon" /> },
  ];

  return (
    <>
      <button className="mobile-nav-toggle" onClick={toggleSidebar}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <nav className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-profile">
          <div className="profile-img-container">
            <img
              src={yashImg}
              alt="Yash Goel"
              className="profile-img"
            />
          </div>
          <h1 className="profile-name">Yash Goel</h1>
          <p className="profile-title">Software Developer</p>
          <div className="social-links">
            <a href="https://github.com/devlopingandroid" className="social-icon"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/yash-goelcs/" className="social-icon"><FiLinkedin /></a>
            <a href="https://leetcode.com/u/mr_yash_goel/" className="social-icon"><SiLeetcode /></a>
            <a href="https://www.instagram.com/mr_yash.goel/" className="social-icon"><FiInstagram /></a>
          </div>
        </div>

        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav-item"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
