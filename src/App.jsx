import React from 'react';
import Header from 'Containers/Header';
import ProvidedServices from 'Containers/ProvidedServices';
import Team from 'Containers/Team/Team';
import Skills from 'Containers/Skills/Skills';
import Portfolio from 'Containers/Portfolio/Portfolio';

const App = () => (
  <div>
    <Header />
    <ProvidedServices />
    <Team />
    <Skills />
    <Portfolio />
  </div>
);

export default App;
