import React from 'react';

import { Progress } from 'react-sweet-progress';
import { string } from 'prop-types';
import styles from './SkillCard.scss';
import 'react-sweet-progress/lib/style.css';

const SkillCard = ({ title, persent, barColor }) => (
  <div className={styles.container}>
    <Progress
      type="circle"
      strokeWidth={9}
      percent={persent}
      width={160}
      theme={{
        active: {
          trailColor: '#dfe8ed',
          color: barColor,
        },
      }}
    />
    <h2 className={styles.title}>{title}</h2>
  </div>
);

SkillCard.propTypes = {
  title: string,
  persent: string,
  barColor: string,
};

SkillCard.defaultProps = {
  title: 'Skill',
  persent: '1',
  barColor: 'red',
};


export default SkillCard;