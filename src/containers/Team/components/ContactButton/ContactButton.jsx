import React from 'react';

import { string } from 'prop-types';
import styles from './ContactButton.scss';
import defaultImage from './assets/mail.svg';

const ContactButton = ({ image, link, color }) => (
  <div className={`${styles[color]} ${styles.contactButton}`}>
    <a href={link}>
      <img src={image} alt={link} />
    </a>
  </div>
);

ContactButton.propTypes = {
  image: string,
  link: string,
  color: string,
};

ContactButton.defaultProps = {
  image: defaultImage,
  link: '#',
  color: 'default',
};
export default ContactButton;