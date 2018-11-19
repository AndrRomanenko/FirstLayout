/* eslint-disable react/prop-types */
import React from 'react';

import styles from './Description.scss';


const Description = ({ text }) => <div className={styles.description}>{text}</div>;

export default Description;