import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleGitHubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projects = [
    {
      id: 1,
      title: "Guest House Booking",
      description: "Best booking web application around Hammanskraal Pretoria",
      image: "/assets/DSC_0109_ffaae47a73.jpg",
      github: "https://github.com/apesoftwares/guest-house-booking",
      demo: "https://guestlocations.co.za/"
    },
    {
      id: 2,
      title: "TombstoneFinder",
      description: "A platform to help you easily find, compare, and connect with trusted tombstone manufacturers and suppliers across South Africa.",
      image: "/assets/2560(w)x400px(h)_Banner_OldYoungCouple.jpg",
      github: "https://github.com/apesoftwares/tombstone-finder", // keep this or update if you have a new repo
      demo: "https://memorial-r2lc.vercel.app/"
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "Interactive food delivery app offering seamless user experience.",
      image: "/assets/IMG-20250129-WA0014.jpg",
      github: "https://github.com/apesoftwares/food-delivery-app",
      demo: "https://fooddelivery.apesoftwares.com"
    }
  ];

  return (
    <div id="projects">


      <h2>Browse Our Recent-<span>Projects</span></h2>
      <div className="project-container">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project"
            role="article"
            aria-label={`Project: ${project.title}`}
          >
            <div className="project-image-container">
              {loading ? (
                <div className="image-placeholder" />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <button 
                onClick={() => handleGitHubClick(project.github)}
                className="github-btn"
                aria-label={`View ${project.title} on GitHub`}
              >
                <i className="fab fa-github"></i> GitHub
              </button>
              <button 
                onClick={() => handleDemoClick(project.demo)}
                className="demo-btn"
                aria-label={`View ${project.title} live demo`}
              >
                <i className="fas fa-external-link-alt"></i> Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
