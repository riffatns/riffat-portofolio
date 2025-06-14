import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
    const openModal = () => {
    setShowModal(true);
    setImageLoaded(false);
    // Prevent all scrolling and interactions with background
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    document.body.style.position = 'relative'; 
  };

  const closeModal = () => {
    setShowModal(false);
    // Re-enable scrolling and interactions
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
    document.body.style.position = 'static';
  };
  
  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (showModal && event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [showModal]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return (
    <div className={`card project${project.id}`}>
      <div className="cardImageContainer" onClick={openModal}>
        <img
          src={project.image}
          alt={project.title}
          className="cardImage"
          loading="lazy"
        />
        <div className="imageOverlay">
          <span>Click for details</span>
        </div>
      </div>
      <div className="cardContent">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardDescription">{project.description}</p>
        <p className="cardTech">
          Technologies: {project.technologies.join(", ")}
        </p>
        <ul className="featureList">
          {project.features.map((feature, index) => (
            <li key={index} className="featureItem">
              {feature.emoji} {feature.text}
            </li>
          ))}
        </ul>
        <div className="buttons">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Live Project ↗️
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            GitHub Repo ↗️
          </a>
        </div>      </div>
      
      {/* Project Modal/Lightbox using Portal */}
      {showModal && createPortal(
        <div 
          className="project-modal-overlay" 
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <div 
            className="project-modal-content" 
            onClick={(e) => e.stopPropagation()}
            aria-labelledby={`project-${project.id}-title`}
          >
            <button className="project-modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>
            
            {/* Large Image Section */}
            <div className="project-modal-image-showcase">
              {!imageLoaded && <div className="loading-spinner"></div>}
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-modal-image-large" 
                onLoad={handleImageLoad}
                style={{ opacity: imageLoaded ? 1 : 0 }}
              />
            </div>
            
            {/* Project Info Panel */}            <div className="project-modal-info-panel">
              <div className="project-modal-content-wrapper">
                <div className="project-modal-header">
                  <h2 id={`project-${project.id}-title`} className="project-modal-title">{project.title}</h2>
                </div>
                
                <div className="project-modal-tech-compact">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
                  <div className="project-modal-description">
                  <p>{project.description}</p>
                </div>
                  <div className="project-modal-features-compact">
                  {project.features.map((feature, index) => (
                    <div key={index} className="feature-badge">
                      <span className="feature-emoji">{feature.emoji}</span>
                      <span className="feature-text">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* Visual separator between features and buttons */}
                <div className="project-modal-separator">
                  <span className="separator-text">Links</span>
                </div>
                
                {/* Project buttons */}
                <div className="project-modal-buttons">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button primary-button"
                    >
                      Visit Live Project
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button secondary-button"
                  >
                    View Source Code
                  </a>
                </div>              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default ProjectCard;
