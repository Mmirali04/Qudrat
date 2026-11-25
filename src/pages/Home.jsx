import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Projects from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Investors from '../components/sections/Investors';
import About from '../components/sections/About';
import CtaBanner from '../components/sections/CtaBanner';
import Contacts from '../components/sections/Contacts';

export default function Home() {
  const { hash } = useLocation();

  // Scroll to a section when arriving from another page (e.g. /#contacts)
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <main>
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <Investors />
      <About />
      <CtaBanner />
      <Contacts />
    </main>
  );
}
