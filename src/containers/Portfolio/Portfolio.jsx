import React from 'react';

import Title from 'Shared/Title';
import Dash from 'Shared/Dash';
import Description from 'Shared/Description';
import Menu from './components/Menu';
import styles from './Portfolio.scss';

const Portfolio = () => (
  <div className={styles.portfolio}>
    <Title text="Our Portfolio" color="brown" />
    <Dash />
    <Description
      color="brown"
      text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
       consectetur, adipisci velit, sed quia non numquam"
    />
    <Menu buttons={['All', 'Web', 'Apps', 'Icons']} />
  </div>
);

export default Portfolio;