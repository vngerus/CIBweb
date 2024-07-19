import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Awards, Contact, Footer, Hero, Navbar, Partners, Projects, Stars, Team, WhatWeDo } from './components';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <WhatWeDo />
            <Projects />
            <Awards />
            <Partners />
          </>
        } />
        <Route path="/team" element={<Team />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
