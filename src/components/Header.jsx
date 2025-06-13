import { Mail, Linkedin, Github, FileDown, X } from "lucide-react";
import profileImage from '../assets/fotoRiffat.jpg';
import { useState } from 'react';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <header className="header">
      <div className="headerContent">
        <div className="header-top">
          <div className="header-info">
            <h1 className="title">
              Hi, I'm <span className="title-name">Riffat Nabil Shiddiq</span>
            </h1>
            <p className="subtitle">(Full Stack Developer)</p>
          </div>          <div className="profile-image-container" onClick={openModal}>
            <img 
              src={profileImage} 
              alt="Riffat Nabil Shiddiq" 
              className="profile-image" 
            />
            <div className="image-overlay">
              <span>Click to view</span>
            </div>
          </div>
        </div>
        <p className="about-me">
          I am an Informatics student at Telkom University with a strong passion 
          for Fullstack Development. My experience working on collaborative projects 
          has sharpened my coding abilities and strengthened my problem-solving 
          mindset. I thrive when faced with complex technical challenges and am 
          committed to continuous learning. I actively explore new technologies, 
          frameworks, and best practices to build scalable, efficient, 
          and maintainable software solutions that deliver real-world impact.
        </p>
        <div className="contactLinks">
          <a
            data-tooltip="Email"
            data-flow="bottom"
            href="mailto:riffatns1337@gmail.com"
            className="iconLink"
          >
            <Mail size={24} />
          </a>
          <a
            data-tooltip="LinkedIn"
            data-flow="bottom"
            href="https://www.linkedin.com/in/riffatns/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Linkedin size={24} />
          </a>          
          <a
            data-tooltip="GitHub"
            data-flow="bottom"
            href="https://github.com/riffatns"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Github size={24} />
          </a>          <a
            href="/CV_Riffat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cvButton"
            download="CV_Riffat.pdf"
          >
            <FileDown size={20} />
            <span>Download CV</span>
          </a>        </div>
      </div>

      {/* Image Modal/Lightbox */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <img 
              src={profileImage} 
              alt="Riffat Nabil Shiddiq - Full Size" 
              className="modal-image" 
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
