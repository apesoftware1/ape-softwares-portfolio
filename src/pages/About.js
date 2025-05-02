import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './About.css';

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Swaryaletsang",
      role: "Founder of A.S",
      position: "Back-End Developer",
      image: "/assets/IMG-20250129-WA0014.jpg",
      linkedin: "https://www.linkedin.com/in/oarabetse",
      github: "https://github.com/KelvinTroy"
    },
    {
      id: 2,
      name: "Thabo Kelvin Mahlonoko",
      role: "Front-End Developer",
      position: "UI/UX Designer",
      image: "/assets/IMG-20250129-WA0014.jpg",
      linkedin: "www.linkedin.com/in/kelvin-thabo-6142a6321",
      github: "https://github.com/KelvinTroy"
    }
  ];

  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <div className="about-banner">
            <h1>About Us</h1>
            <p>Learn more about our journey, values, and what drives us to deliver excellence.</p>
          </div>
          
          <div className="about-content">
            <div className="about-info">
              <h2>Our Mission</h2>
              <p>
                We aim to provide top-notch services to our clients by combining creativity,
                technology, and a customer-centric approach.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                To be the premier software development company, recognized for our commitment to excellence, creativity,
                and technological advancements that foster growth, efficiency, and innovation.
              </p>
              
              <h2>Core Values</h2>
              <ul>
                <li><strong>Innovation:</strong> Staying ahead with cutting-edge solutions.</li>
                <li><strong>Integrity:</strong> Transparency and trust in every project.</li>
                <li><strong>Quality:</strong> Commitment to excellence in everything we deliver.</li>
              </ul>
            </div>
            
            <div className="about-team">
              <h2>Meet the Team</h2>
              <div className="team-grid">
                {teamMembers.map((member) => (
                  <div 
                    key={member.id} 
                    className="team-member"
                    role="article"
                    aria-label={`Team member: ${member.name}`}
                  >
                    <div className="team-image-container">
                      {loading ? (
                        <div className="image-placeholder" />
                      ) : (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p>{member.position}</p>
                    <div className="team-social-media">
                      <button
                        onClick={() => {
                          console.log('LinkedIn clicked:', member.linkedin);
                          window.open(member.linkedin, '_blank', 'noopener,noreferrer');
                        }}
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                      </button>
                      <button
                        onClick={() => {
                          console.log('GitHub clicked:', member.github);
                          window.open(member.github, '_blank', 'noopener,noreferrer');
                        }}
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <i className="fab fa-github"></i> GitHub
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="map">
            <h2>Our Office Location</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.7088952891593!2d28.282479315520433!3d-25.40610418380107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebb35096b6c6dff%3A0x1d2a2fa1e6c57b03!2sHammanskraal%2C%20Pretoria%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1698360549276!5m2!1sen!2sus"
              width="100%" 
              height="400" 
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
              aria-label="Google Maps showing our office location in Hammanskraal, Pretoria"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
