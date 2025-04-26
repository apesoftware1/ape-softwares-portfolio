import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { id: 1, name: 'React' },
    { id: 2, name: 'React-Native' },
    { id: 3, name: 'HTML' },
    { id: 4, name: 'CSS' },
    { id: 5, name: 'JavaScript' },
    { id: 6, name: 'Python' },
    { id: 7, name: 'Postgres' },
    { id: 8, name: 'MySQL' },
    { id: 9, name: 'GraphQL' },
    { id: 10, name: 'Django' }
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
