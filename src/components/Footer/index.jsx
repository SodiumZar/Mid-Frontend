import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [social, setSocial] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/social')
      .then(response => {
        setSocial(response.data);
      })
      .catch(error => {
        console.error('Error fetching social data:', error);
      });
  }, []);

  if (!social) {
    return null;
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Nazarya Kandou. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#home" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              GitHub
            </a>
            <a 
              href={`mailto:${social.email}`}
              className="text-gray-300 hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
        
        {/* Built with */}
        <div className="text-center mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
