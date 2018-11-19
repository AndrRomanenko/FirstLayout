import React from 'react';

import { string } from 'prop-types';
import styles from './Title.scss';


const Title = ({ text }) => <header className={styles.title}>{text}</header>;

Title.propTypes = {
  text: string,
};

Title.defaultProps = {
  text: 'Title Sample',
};

export default Title;