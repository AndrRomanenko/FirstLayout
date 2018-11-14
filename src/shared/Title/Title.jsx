/* eslint-disable react/prop-types */
import React from 'react';

import styles from './Title.scss';


const Title = ({ text }) => <header className={styles.title}>{text}</header>;

export default Title;