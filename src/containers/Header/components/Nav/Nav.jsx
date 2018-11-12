import React from 'react';

import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>Home</li>
      <li className={styles.active}>About</li>
      <li>Work</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
  </nav>
);
export default Nav;