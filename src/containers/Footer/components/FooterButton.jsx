import React from 'react';

import { string } from 'prop-types';
import styles from './FooterButton.scss';

const FooterButton = ({ link, label }) => (
  <div className={styles.footerButton}>
    <a href={link} className={styles.label}>
      {label}
    </a>
  </div>
);

FooterButton.propTypes = {
  link: string,
  label: string,
};

FooterButton.defaultProps = {
  link: '#',
  label: 'default',
};

export default FooterButton;