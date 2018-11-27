import React from 'react';
import Title from 'Shared/Title';
import Dash from 'Shared/Dash';
import Description from 'Shared/Description';
import ReviewCard from './components/ReviewCard';

import styles from './Reviews.scss';

const Reviews = () => {
  const reviews = [
    {
      review: '“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”',
      name: 'Chanel Iman',
      position: 'CEO of Pinterest',
    },
    {
      review: '“Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.”',
      name: 'ADRIANA LIMA',
      position: 'Founder of Instagram',
    },
    {
      review: '“Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.”',
      name: 'ANNE HATHAWAY',
      position: 'Lead Designer at Behance',
    },
    {
      review: '“Phasellus non purus vel arcu tempor commodo. Fusce semper, purus vel luctus molestie, risus sem cursus neque.”',
      name: 'EMMA STONE',
      position: 'Co-Founder of Shazam',
    },
  ];

  return (
    <div className={styles.container}>
      <Title text="WHAT POEPLE SAY ABOUT US" />
      <Dash />
      <Description text="Our clients love us!" />
      <div className={styles.contentContainer}>
        {
         reviews.map(rewiew => (
           <ReviewCard {...rewiew} key={rewiew.name} />
         ))
       }
      </div>
    </div>
  );
};

export default Reviews;