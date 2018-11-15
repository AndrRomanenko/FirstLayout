import React from 'react';

import { Progress } from 'react-sweet-progress';
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


export default SkillCard;