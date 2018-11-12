import React from 'react';

import styles from './Logo.scss';
import logoImage from './logo.svg';

const Logo = () => (
  <div className={styles.logo}>
    <img src={logoImage} alt="Cuda" />
  </div>
);

export default Logo;