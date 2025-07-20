import { useState, useEffect } from 'react';
import SpaceNavigation from './components/SpaceNavigation';
import SpaceHero from './components/SpaceHero';
import SpaceAbout from './components/SpaceAbout';
import SpaceProjects from './components/SpaceProjects';
import SpaceTimeline from './components/SpaceTimeline';
import SpaceTechStack from './components/SpaceTechStack';
import SpaceContact from './components/SpaceContact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'timeline', 'tech', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SpaceNavigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <div id="home">
        <SpaceHero />
      </div>
      <div id="about">
        <SpaceAbout />
      </div>
      <div id="projects">
        <SpaceProjects />
      </div>
      <div id="timeline">
        <SpaceTimeline />
      </div>
      <div id="tech">
        <SpaceTechStack />
      </div>
      <div id="contact">
        <SpaceContact />
      </div>
    </div>
  );
}

export default App;