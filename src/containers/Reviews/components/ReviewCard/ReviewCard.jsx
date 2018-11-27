import React from 'react';
import { string } from 'prop-types';
import defaultPhoto from './assets/photo.svg';

import styles from './ReviewCard.scss';

const ReviewCard = ({
  photo, name, position, review,
}) => (
  <div className={styles.card}>
    <div className={styles.photoContainer}>
      <img src={photo} alt={photo} />
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.review}>{review}</div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.position}>{position}</div>
    </div>
  </div>
);

ReviewCard.propTypes = {
  photo: string,
  name: string,
  position: string,
  review: string,
};

ReviewCard.defaultProps = {
  photo: defaultPhoto,
  name: 'Igor Verkhoglyad',
  position: 'Top JS developer',
  review: 'Its the best layout ive ever seen. Just MF perfect!',
};

export default ReviewCard;
