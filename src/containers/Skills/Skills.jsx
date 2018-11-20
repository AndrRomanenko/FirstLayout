import React from 'react';

import Title from 'Shared/Title';
import Dash from 'Shared/Dash';
import Description from 'Shared/Description';
import SkillCard from './components/SkillsCard';
import styles from './Skills.scss';

const Skills = () => {
  const skillsData = [
    {
      title: 'Web Design',
      persent: '90',
      barColor: '#30bae7',
    },
    {
      title: 'CSS/Html',
      persent: '75',
      barColor: '#d74680',
    },
    {
      title: 'Graphic design',
      persent: '70',
      barColor: '#15c7a8',
    },
    {
      title: 'Ui/ux',
      persent: '85',
      barColor: '#eb7d4b',
    },
  ];

  return (
    <div className={styles.skills}>
      <Title color="aqua" text="We  got skills!" />
      <Dash />
      <Description
        color="aqua"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className={styles.content}>
        {
          skillsData.map(skill => (
            <SkillCard
              {...skill}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Skills;