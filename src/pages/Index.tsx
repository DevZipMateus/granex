
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
import Plans from '../components/Plans';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';
import Gallery from '../components/Gallery';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <AboutUs />
        <Team />
        <Plans />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
