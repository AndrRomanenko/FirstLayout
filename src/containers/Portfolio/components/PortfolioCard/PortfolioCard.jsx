import React from 'react';

import { string } from 'prop-types';
import styles from './PortfolioCard.scss';

const PortfolioCard = ({ image, title }) => (
  <div className={styles.card}>
    <img className={styles.image} src={image} alt={image} />
    <h2 className={styles.title}>{title}</h2>
  </div>
);

PortfolioCard.propTypes = {
  image: string,
  title: string,
};

PortfolioCard.defaultProps = {
  image: 'Empty',
  title: 'Empty',
};

export default PortfolioCard;