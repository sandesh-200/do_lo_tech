import { useEffect } from 'react';
import Header from '../components/Header';
import { initScrollAnimations } from '../utils/scrollAnimations';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowWeWork from '../components/HowWeWork';
import TechStack from '../components/TechStack';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations after component mounts
    initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <TechStack />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
