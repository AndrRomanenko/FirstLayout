/* eslint-disable react/button-has-type */
/* {`${styles.button} ${className}`} */
import React from 'react';

import { string } from 'prop-types';
import styles from './Button.scss';

const Button = (props) => {
  const {
    className,
    label,
    btnType,
    ...restProps
  } = props;

  return (
    <button
      type={btnType}
      className={`${styles.button} ${className}`}
      {...restProps}
    >
      {label}
    </button>
  );
};

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