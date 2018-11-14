import React from 'react';

import Button from 'Shared/Button';
import Nav from './components/Nav';
import Logo from './components/Logo/Logo';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.header}>
    <header className={styles.menu}>
      <Logo />
      <Nav />
    </header>
    <div className={styles.message}>
      Hi there! We are the new kids on the block and we build awesome websites and mobile apps.
    </div>
    <div className={styles.buttonContainer}>
      <Button
        btnType="button"
        className={styles.button}
        label="work with us!"
      />
    </div>
  </div>
);

export default Header;