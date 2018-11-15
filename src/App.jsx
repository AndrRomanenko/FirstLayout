import React from 'react';

import Header from 'Containers/Header';
import ProvidedServices from 'Containers/ProvidedServices';
import Team from 'Containers/Team/Team';
import Skills from 'Containers/Skills';

const App = () => (
  <React.Fragment>
    <Header />
    <ProvidedServices />
    <Team />
    <Skills />
  </React.Fragment>
);

export default App;
