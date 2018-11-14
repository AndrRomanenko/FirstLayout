import React from 'react';

import styles from './Dash.scss';
import logoImage from './dash.svg';

const Dash = () => (
  <img className={styles.dash} src={logoImage} alt="Cuda" />
);

export default Dash;