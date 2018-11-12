/* eslint-disable import/no-unresolved */
import React from 'react';

import styles from './Header.scss';
import Nav from './components/Nav';
import NavMobile from './components/NavMobile/NavMobile';
import Logo from './components/Logo/Logo';
import Button from './components/Button';

const Header = () => (
  <div className={styles.header}>
    <header className={styles.menu}>
      <Logo />
      <Nav />
      <NavMobile />
    </header>
    <div className={styles.message}>
      Hi there! We are the new kids on the block and we build awesome websites and mobile apps.
    </div>
    <div className={styles.button}>
      <Button />
    </div>
  </div>
);

export default Header;