import React from 'react';
import { Awards, Footer, Hero, Partners, Projects, WhatWeDo } from './components';

const App: React.FC = () => {
  return (
    <>
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