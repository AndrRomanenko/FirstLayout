import React from 'react';

import styles from './NavMobile.scss';

const NavMobile = () => (
  <nav className={styles.navMobile}>
    <ul>
      <li>Home</li>
      <li className={styles.active}>About</li>
      <li>Work</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
  </nav>
);
export default NavMobile;