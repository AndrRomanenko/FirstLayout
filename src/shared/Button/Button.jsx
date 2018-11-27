/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';
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
      className={cn(styles.button, className)}
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