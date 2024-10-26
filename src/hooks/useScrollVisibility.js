// hooks/useScrollVisibility.js
import { useEffect, useState } from 'react';

export default function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState({ about: false, projects: false, resume: false });

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');
      const resumeSection = document.getElementById('resume');

      if (aboutSection && projectsSection && resumeSection) {
        setIsVisible({
          about: aboutSection.getBoundingClientRect().top < window.innerHeight,
          projects: projectsSection.getBoundingClientRect().top < window.innerHeight,
          resume: résuméSection.getBoundingClientRect().top < window.innerHeight,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return isVisible;
}
