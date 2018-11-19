import React from 'react';

import logoImage from './assets/logo.svg';
import styles from './Logo.scss';

const Logo = () => (
  <div className={styles.logo}>
    <img
      className={styles.logoImage}
      src={logoImage}
      alt="Cuda"
    />
  </div>
);

export default Logo;