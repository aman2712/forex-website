import React from 'react';
import Navbar from './components/ui/navbar';
import Hero from './components/ui/hero';
import Testimonials from './components/ui/testimonials';
import Courses from './components/ui/courses';
import Features from './components/ui/features';
import Numbers from './components/ui/numbers';
import Clients from './components/ui/clients';
import Instructions from './components/ui/instructions';
import Footer from './components/ui/footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Testimonials />
      <Courses />
      <Features />
      <Numbers />
      <Clients />
      <Instructions />
      <Footer />
    </main>
  );
}

export default App;