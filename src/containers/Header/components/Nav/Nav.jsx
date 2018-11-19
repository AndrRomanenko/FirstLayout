import React from 'react';

import Button from 'Shared/Button';
import styles from './Nav.scss';

const buttons = [
  'Home',
  'About',
  'Work',
  'Blog',
  'Contact',
];

const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.listContainer}>
      {
        buttons.map(item => (
          <li className={styles.list}>
            <Button
              btnType="button"
              className={styles.navigationButton}
              label={item}
            />
          </li>
        ))
      }
    </ul>
  </nav>
);
export default Nav;