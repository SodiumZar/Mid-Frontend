import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/skills')
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
      });
  }, []);

  if (skills.length === 0) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skillCategory) => (
            <div 
              key={skillCategory.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.technologies.map((tech, index) => (
                  <li 
                    key={index}
                    className="text-gray-700 flex items-center"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
