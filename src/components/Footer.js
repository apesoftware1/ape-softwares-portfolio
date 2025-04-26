import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const quickLinks = [
    { id: 1, name: 'Privacy Policy', icon: 'fas fa-shield-alt', url: '/privacy-policy' },
    { id: 2, name: 'Terms of Service', icon: 'fas fa-file-signature', url: '/terms' },
    { id: 3, name: 'FAQs', icon: 'fas fa-question-circle', url: '/faqs' }
  ];

  const socialLinks = [
    { id: 1, name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com/apesoftwares' },
    { id: 2, name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/apesoftwares' },
    { id: 3, name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/company/apesoftwares' },
    { id: 4, name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/apesoftwares' }
  ];

  return (
    <footer className="footer">
      {/*Contact Section */}
      <div className="contact-section">
        <h2>Connect with Us</h2>
        <form onSubmit={handleSubmit}>
          <input 
            className="input-field" 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            required 
            aria-label="Your email address"
          />
          <textarea 
            className="input-field" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            rows="5" 
            required
            aria-label="Your message"
          ></textarea>
          <button 
            className="btn-primary" 
            type="submit"
            aria-label="Submit your message"
          >
            Stay Connected
          </button>
        </form>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Contact Info Column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-envelope"></i>
            <a href="mailto:support@apesoftwares.com">support@apesoftwares.com</a>
          </p>
          <p>
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+1234567890">+123 456 7890</a> / <a href="tel:+0799635216">079 963 5216</a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            <a href="https://maps.google.com/?q=123+Business+Rd,+Melbourne" target="_blank" rel="noopener noreferrer">
              123 Business Rd, Melbourne
            </a>
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.url}
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links Column */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${link.name}`}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2025 Ape Softwares. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
