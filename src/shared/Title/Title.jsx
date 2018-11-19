import React from 'react';

import { string } from 'prop-types';
import styles from './Title.scss';

const Title = ({
  color, text,
}) => (
  <header
    className={`${styles[color]} ${styles.title}`}
  >
    {text}
  </header>
);

Title.defaultProps = {
  color: 'white',
  text: 'Sample title',
};

Title.propTypes = {
  color: string,
  text: string,
};

Title.propTypes = {
  text: string,
};

Title.defaultProps = {
  text: 'Title Sample',
};

export default Title;