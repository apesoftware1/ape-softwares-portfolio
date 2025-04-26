import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-section">
      <h1>Welcome to Ape Softwares</h1>
      <p>
        We are passionate about creating stunning web designs and intuitive mobile-friendly experiences.
        Our team of expert developers combines creativity with cutting-edge technology to deliver
        exceptional digital solutions.
      </p>
      <Link to="/about">
        <button aria-label="Learn more about our journey">Creator Journey</button>
      </Link>
    </div>
  );
}

export default Home;
