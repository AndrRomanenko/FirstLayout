/* eslint-disable react/prop-types */
import React from 'react';

import Button from 'Shared/Button';
import styles from './Nav.scss';

const Nav = ({ links }) => (
  <nav className={styles.nav}>
    <ul className={styles.listContainer}>
      {
        links.map(item => (
          <li className={styles.list} key={item}>
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