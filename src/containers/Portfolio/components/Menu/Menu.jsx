/* eslint-disable react/prop-types */
import React from 'react';

import Button from 'Shared/Button';
import styles from './Menu.scss';

const Menu = ({ buttons }) => (
  <div className={styles.container}>
    {
      buttons.map(button => (
        <Button
          btnType="button"
          className={styles.menuButton}
          label={button}
          key={button}
        />
      ))
    }
  </div>
);
export default Menu;