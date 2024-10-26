// pages/index.js
import Head from 'next/head';
import { useEffect, useState, useContext, useRef } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import Recommendation from '../components/Recommendation';
import { DarkModeContext } from '../context/DarkModeContext';
import sr from '../utils/scrollReveal'; // Import scroll reveal utility

export default function Home() {
  const [isVisible, setIsVisible] = useState({ about: false, projects: false, resume: false, recommendation: false });
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const recommendationRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDarkMode = localStorage.getItem('darkMode');
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialDarkMode = savedDarkMode !== null ? savedDarkMode === 'true' : prefersDarkMode;
      setDarkMode(initialDarkMode);
      if (initialDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleThemeChange = (e) => {
        setDarkMode(e.matches);
      };
      darkModeMediaQuery.addEventListener('change', handleThemeChange);
      return () => darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    }
  }, []);

  useEffect(() => {
    const sections = [
      { ref: aboutRef, key: 'about' },
      { ref: projectsRef, key: 'projects' },
      { ref: resumeRef, key: 'resume' },
      { ref: recommendationRef, key: 'recommendation' },
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', darkMode);
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode]);

  useEffect(() => {
    if (sr && typeof sr.reveal === 'function') {
      sr.reveal(aboutRef.current, { origin: 'bottom', distance: '50px', duration: 1000, delay: 200 });
      sr.reveal(projectsRef.current, { origin: 'bottom', distance: '50px', duration: 1000, delay: 400 });
      sr.reveal(resumeRef.current, { origin: 'bottom', distance: '50px', duration: 1000, delay: 600 });
      sr.reveal(recommendationRef.current, { origin: 'bottom', distance: '50px', duration: 1000, delay: 800 });
    }
  }, []);  

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 snap-y snap-mandatory overflow-y-scroll scroll-smooth transition-colors duration-500`}>
      <Head>
        <title>Portfolio | Fredrik Jurgell</title>
        <meta name="description" content="Welcome to my portfolio website" key="description" />
      </Head>
      <Navbar isVisible={isVisible} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Header />
      <main className="flex flex-col items-center flex-1 mt-24">
        <section id="about" ref={aboutRef} className="mt-24 w-full flex justify-center animate-fade-in transform transition-transform duration-500 hover:scale-105">
          <About isVisible={isVisible.about} />
        </section>
        <section id="projects" ref={projectsRef} className="mt-24 w-full flex justify-center animate-fade-in transform transition-transform duration-500 hover:scale-105">
          <Projects isVisible={isVisible.projects} />
        </section>
        <section id="resume" ref={resumeRef} className="mt-24 w-full flex justify-center animate-fade-in transform transition-transform duration-500 hover:scale-105">
          <Resume isVisible={isVisible.resume} />
        </section>
        <section id="recommendation" ref={recommendationRef} className="mt-24 w-full flex justify-center animate-fade-in transform transition-transform duration-500 hover:scale-105">
        <Recommendation isVisible={isVisible.recommendation} />
        </section>
      </main>
      <Footer />
    </div>
  );
}