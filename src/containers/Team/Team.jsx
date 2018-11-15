/* eslint-disable import/no-unresolved */
import React from 'react';

import Title from 'Shared/Title';
import Dash from 'Shared/Dash';
import Description from 'Shared/Description';
import EmpCard from './components/EmpCard';

import Photo from './assets/Photo.svg';
import mail from './components/ContactButton/assets/mail.svg';
import facebook from './components/ContactButton/assets/facebook.svg';
import linkedin from './components/ContactButton/assets/linkedin.svg';
import twitter from './components/ContactButton/assets/twitter.svg';

import styles from './Team.scss';

const Team = () => (
  <div className={styles.team}>
    <Title color="aqua" text="MEET OUR BEAUTIFUL TEAM" />
    <Dash />
    <Description
      color="aqua"
      text="We are a small team of designers and developers, who help brands with big ideas."
    />
    <div className={styles.content}>
      <EmpCard
        photo={Photo}
        name="ANNE HATHAWAY"
        position="CEO / Marketing Guru"
        about="Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna."
        contacts={[
          {
            image: facebook,
            link: 'facebook.com',
            color: 'blue',
          },
          {
            image: twitter,
            link: 'twitter.com',
          },
          {
            image: linkedin,
            link: 'linkedin.com',
          },
          {
            image: mail,
            link: 'gmail.com',
            color: 'red',
          },
        ]}
      />
      <EmpCard
        photo={Photo}
        name="Kate Upton"
        position="Creative Director"
        about="Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident."
        contacts={[
          {
            image: twitter,
            link: 'twitter.com',
          },
          {
            image: linkedin,
            link: 'linkedin.com',
          },
          {
            image: mail,
            link: 'gmail.com',
            color: 'red',
          },
        ]}
      />
      <EmpCard
        photo={Photo}
        name="Olivia Wilde"
        position="Lead Designer"
        about="Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt."
        contacts={[
          {
            image: facebook,
            link: 'facebook.com',
            color: 'blue',
          },
          {
            image: twitter,
            link: 'twitter.com',
          },
          {
            image: linkedin,
            link: 'linkedin.com',
          },
          {
            image: mail,
            link: 'gmail.com',
            color: 'red',
          },
        ]}
      />
      <EmpCard
        photo={Photo}
        name="Ashley Greene"
        position="SEO / Developer"
        about="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        contacts={[
          {
            image: facebook,
            link: 'facebook.com',
            color: 'blue',
          },
          {
            image: twitter,
            link: 'twitter.com',
          },
          {
            image: mail,
            link: 'gmail.com',
            color: 'red',
          },
        ]}
      />
    </div>
  </div>
);

export default Team;