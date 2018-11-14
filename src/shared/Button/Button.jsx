/* eslint-disable react/button-has-type */
import React from 'react';

import { string } from 'prop-types';
import styles from './Button.scss';

const Button = ({ btnType, className, label }) => (
  <button
    type={btnType}
    className={className}
  >
    {label}
  </button>
);

Button.propTypes = {
  btnType: string,
  className: string,
  label: string,
};

Button.defaultProps = {
  btnType: 'button',
  className: styles.button,
  label: 'Button',
};

export default Button;