import React from 'react';

import { string } from 'prop-types';
import styles from './ItemCard.scss';

const ItemCard = ({ image, title, description }) => (
  <div className={styles.itemCard}>
    <img src={image} alt={image} />
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.description}>{description}</div>
  </div>
);

ItemCard.propTypes = {
  image: string,
  title: string,
  description: string,
};

ItemCard.defaultProps = {
  image: 'Empty',
  title: 'Empty',
  description: 'sample text',
};

export default ItemCard;