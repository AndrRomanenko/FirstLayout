import React from 'react';
import Title from 'Shared/Title';
import Dash from 'Shared/Dash';
import Description from 'Shared/Description';

import styles from './Reviews.scss';

const Reviews = () => (
  <div className={styles.container}>
    <Title text="WHAT POEPLE SAY ABOUT US" />
    <Dash />
    <Description text="Our clients love us!" />
  </div>
);

export default Reviews;