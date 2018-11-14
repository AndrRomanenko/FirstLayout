import React from 'react';

import styles from './ItemCard.scss';


const ItemCard = ({ image, title, description }) => (
  <div className={styles.itemCard}>
    <img src={image} alt={image} />
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.description}>{description}</div>
  </div>
);

export default ItemCard;