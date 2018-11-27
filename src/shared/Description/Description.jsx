/* eslint-disable react/prop-types */
import React from 'react';

import styles from './Description.scss';


const Description = ({ color, text }) => <div className={`${styles[color]} ${styles.description}`}>{text}</div>;

export default Description;