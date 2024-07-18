import React from 'react';
import { Awards, Footer, Hero, Navbar, Partners, Projects, WhatWeDo } from './components';

const App: React.FC = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <WhatWeDo />
    <Projects />
    <Awards />
    <Partners />
    <Footer />
    </>
  );
};

export default App;