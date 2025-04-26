import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-section">
      <h2>Services</h2>
      <div className="skills">
        <div className="card">
          <h4>App Design</h4>
          <p>Create visually appealing and functional app designs.</p>
        </div>
        <div className="card">
          <h4>Front-end Development</h4>
          <p>Create stunning web designs and intuitive mobile-friendly experiences.</p>
        </div>
        <div className="card">
          <h4>Back-end Development</h4>
          <p>Develop robust back-end systems for your web apps.</p>
        </div>
        <div className="card">
          <h4>Web Development</h4>
          <p>Build modern, responsive, and user-friendly websites.</p>
        </div>
        <div className="card">
          <h4>Freelancing</h4>
          <p>Deliver reliable and high-quality freelance services.</p>
        </div>
        <div className="card">
          <h4>Git Version Control</h4>
          <p>Manage and track project versions effectively with Git.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
