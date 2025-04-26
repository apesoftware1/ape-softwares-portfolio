import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

function Portfolio() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
