import React from 'react';

import Header from 'Containers/Header';
import ProvidedServices from 'Containers/ProvidedServices';
import Team from 'Containers/Team/Team';

const App = () => (
  <React.Fragment>
    <Header />
    <ProvidedServices />
    <Team />
  </React.Fragment>
);

export default App;
