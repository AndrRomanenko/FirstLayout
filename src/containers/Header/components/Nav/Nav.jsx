import React from 'react';

import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li><button type="button">Home</button></li>
      <li><button type="button">About</button></li>
      <li><button type="button">Work</button></li>
      <li><button type="button">Blog</button></li>
      <li><button type="button">Contact</button></li>
    </ul>
  </nav>
);
export default Nav;