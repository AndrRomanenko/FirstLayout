import React from 'react';

import Button from 'Shared/Button';
import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Button
          btnType="button"
          className={styles.navigationButton}
          label="Home"
        />
      </li>
      <li>
        <Button
          btnType="button"
          className={styles.navigationButton}
          label="About"
        />
      </li>
      <li>
        <Button
          btnType="button"
          className={styles.navigationButton}
          label="Work"
        />
      </li>
      <li>
        <Button
          btnType="button"
          className={styles.navigationButton}
          label="Blog"
        />
      </li>
      <li>
        <Button
          btnType="button"
          className={styles.navigationButton}
          label="Contact"
        />
      </li>
    </ul>
  </nav>
);
export default Nav;