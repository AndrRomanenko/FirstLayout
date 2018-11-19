import React from 'react';

import Dash from 'Shared/Dash';
import Title from 'Shared/Title';
import Description from 'Shared/Description';
import ItemCard from './components/ItemCard';
import styles from './ProvidedServices.scss';

import flagSrc from './assets/flag.svg';
import rocketSrc from './assets/rocket.svg';
import pencilSrc from './assets/pencil.svg';
import gearsSrc from './assets/gears.svg';

const fetchData = [
  {
    image: flagSrc,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.',
  },
  {
    image: pencilSrc,
    title: 'Design',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
  {
    image: gearsSrc,
    title: 'Development',
    description: 'At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.',
  },
  {
    image: rocketSrc,
    title: 'Rocket Scince',
    description: 'Et harum quidem rerum est et expedita distinctio. Nam libero tempore.',
  },
];

const ProvidedServices = () => (
  <div className={styles.services}>
    <Title text="Services we provide" />
    <Dash />
    <Description
      text="We are working with both individuals and businesses from all over the globe to create awesome websites and applications."
    />
    <div className={styles.content}>
      {
        fetchData.map(item => (
          <ItemCard
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))
      }
    </div>
  </div>
);

export default ProvidedServices;
