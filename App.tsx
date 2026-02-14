
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Services from './components/Services';
import Process from './components/Process';
import CaseHighlights from './components/CaseHighlights';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="flex-grow">
        <Hero />
        <Logos />
        <Services />
        <Process />
        <CaseHighlights />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
      
      {/* AI Assistant for Technical Queries */}
      <Assistant />
    </div>
  );
};

export default App;
