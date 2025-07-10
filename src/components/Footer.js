import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faFileSignature,
  faQuestionCircle,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',      // <-- Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',     // <-- Replace with your EmailJS template ID
      {
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'       // <-- Replace with your EmailJS public key
    )
    .then((result) => {
      alert('Message sent! We will get back to you soon.');
      setFormData({ email: '', message: '' });
    }, (error) => {
      alert('Failed to send message. Please try again later.');
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const quickLinks = [
    { id: 1, name: 'Privacy Policy', icon: faShieldAlt, url: '/privacy-policy' },
    { id: 2, name: 'Terms of Service', icon: faFileSignature, url: '/terms' },
    { id: 3, name: 'FAQs', icon: faQuestionCircle, url: '/faqs' }
  ];

  const socialLinks = [
    { id: 1, name: 'Facebook', icon: faFacebookF, url: 'https://web.facebook.com/profile.php?id=61578148533060' },
    { id: 2, name: 'Twitter', icon: faTwitter, url: 'https://twitter.com/apesoftwares' },
    { id: 3, name: 'LinkedIn', icon: faLinkedinIn, url: 'https://linkedin.com/company/apesoftwares' },
    { id: 4, name: 'GitHub', icon: faGithub, url: 'https://github.com/apesoftware1/' }
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
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your email address"
          />
          <textarea
            className="input-field"
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Your message"
          ></textarea>
          <button className="btn-primary" type="submit" aria-label="Submit your message">
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
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:support@apesoftwares.com">support@apesoftwares.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <a href="tel:+27 69 152 8489">+27 69 152 8489</a> / <a href="tel:+0799635216">079 963 5216</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <a href="https://maps.google.com/?q=0943+Marokolong+0434" target="_blank" rel="noopener noreferrer">
              0943 Marokolong 0434
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
                  <FontAwesomeIcon icon={link.icon} />
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
                <FontAwesomeIcon icon={link.icon} />
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