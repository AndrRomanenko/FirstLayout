import React from 'react';

import Header from 'Containers/Header';
import ProvidedServices from 'Containers/ProvidedServices';
import Team from 'Containers/Team/Team';
import Skills from 'Containers/Skills';
import Portfolio from 'Containers/Portfolio';

const App = () => (
  <React.Fragment>
    <Header />
    <ProvidedServices />
    <Team />
    <Skills />
    <Portfolio />
  </React.Fragment>
);

export default App;
