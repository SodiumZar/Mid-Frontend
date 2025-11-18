import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './components/Navbar/index.jsx';
import Hero from './components/Hero/index.jsx';
import About from './components/About/index.jsx';
import Skills from './components/Skills/index.jsx';
import Projects from './components/Projects/index.jsx';
import Contact from './components/Contact/index.jsx';
import Footer from './components/Footer/index.jsx';

const RestAPI = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default RestAPI;
