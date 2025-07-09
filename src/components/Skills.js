import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    // Frontend
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'React' },
    { id: 5, name: 'React-Native' },
    { id: 6, name: 'Tailwind CSS' },
    { id: 7, name: 'Next.js' },
    // Backend
    { id: 8, name: 'Node.js' },
    { id: 9, name: 'Express' },
    { id: 10, name: 'Python' },
    { id: 11, name: 'Django' },
    // Databases
    { id: 12, name: 'Postgres' },
    { id: 13, name: 'MySQL' },
    { id: 14, name: 'MongoDB' },
    { id: 15, name: 'Firebase' },
    // API/Other
    { id: 16, name: 'GraphQL' },
    { id: 17, name: 'GitHub' },
  ];

  return (
    <div className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div 
            key={skill.id} 
            className="skill-item"
            role="article"
            aria-label={`Skill: ${skill.name}`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
