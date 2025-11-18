import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/profile')
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  if (!profile) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-indigo-600">{profile.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          {profile.title} at {profile.university}
        </p>
        
        <p className="text-lg text-gray-500 mb-8">
          {profile.year} • {profile.semester}
        </p>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
