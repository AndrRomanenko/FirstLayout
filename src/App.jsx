import React from 'react';
import Header from 'Containers/Header';
import ProvidedServices from 'Containers/ProvidedServices';
import Team from 'Containers/Team/Team';
import Skills from 'Containers/Skills/Skills';

const App = () => (
  <div>
    <Header />
    <ProvidedServices />
    <Team />
    <Skills />
  </div>
);

export default App;
