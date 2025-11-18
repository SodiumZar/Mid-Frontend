import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/about')
      .then(response => {
        setAbout(response.data);
      })
      .catch(error => {
        console.error('Error fetching about data:', error);
      });
  }, []);

  if (!about) {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {about.bio}
          </p>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {about.interests.map((interest, index) => (
                <span 
                  key={index}
                  className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
