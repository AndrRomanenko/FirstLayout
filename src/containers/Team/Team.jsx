/* eslint-disable import/no-unresolved */
import React from 'react';

import Title from 'Shared/Title';
import Dash from 'Shared/Dash';
import Description from 'Shared/Description';
import EmpCard from './components/EmpCard';

import Photo from './assets/Photo.svg';
import mailImg from './components/ContactButton/assets/mail.svg';
import facebookImg from './components/ContactButton/assets/facebook.svg';
import linkedinImg from './components/ContactButton/assets/linkedin.svg';
import twitterImg from './components/ContactButton/assets/twitter.svg';

import styles from './Team.scss';

const Team = () => {
  const mail = {
    image: mailImg,
    link: 'https://gmail.com',
    color: 'red',
  };
  const facebook = {
    image: facebookImg,
    link: 'https://facebook.com',
    color: 'blue',
  };
  const linkedIn = {
    image: linkedinImg,
    link: 'https://linkedin.com',
  };
  const twitter = {
    image: twitterImg,
    link: 'https://twitter.com',
  };

  const employees = [
    {
      photo: Photo,
      name: 'Anne Hathaway',
      position: 'CEO / Marketing Guru',
      about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
      contacts: [facebook, twitter, linkedIn, mail],
    },
    {
      photo: Photo,
      name: 'Kate Upton',
      position: 'Creative Director',
      about: 'Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident.',
      contacts: [twitter, linkedIn, mail],
    },
    {
      photo: Photo,
      name: 'Olivia Wilde',
      position: 'Lead Designer',
      about: 'Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt.',
      contacts: [facebook, twitter, linkedIn, mail],
    },
    {
      photo: Photo,
      name: 'Ashley Greene',
      position: 'SEO / Developer',
      about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      contacts: [facebook, twitter, mail],
    },
  ];

  return (
    <div className={styles.team}>
      <Title color="aqua" text="MEET OUR BEAUTIFUL TEAM" />
      <Dash />
      <Description
        color="aqua"
        text="We are a small team of designers and developers, who help brands with big ideas."
      />
      <div className={styles.content}>
        {
        employees.map(employee => (
          <EmpCard
            key={employee.name}
            {...employee}
          />
        ))
      }
      </div>
    </div>
  );
};

export default Team;