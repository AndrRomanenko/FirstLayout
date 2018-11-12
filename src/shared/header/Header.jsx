/* eslint-disable react/prop-types */
import React from 'react';

import styles from './Header.scss';


const Header = ({ text }) => <header className={styles.header}>{text}</header>;

export default Header;