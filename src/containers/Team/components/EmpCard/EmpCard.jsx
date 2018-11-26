import React from 'react';

import { string, array } from 'prop-types';
import ContactButton from '../ContactButton';
import defaultPhoto from '../../assets/Photo.svg';
import styles from './EmpCard.scss';

const EmpCard = ({
  photo, name, position, about, contacts,
}) => (
  <div className={styles.empCard}>
    <img src={photo} alt={photo} />
    <div className={styles.name}>{name}</div>
    <div className={styles.position}>{position}</div>
    <div className={styles.about}>{about}</div>
    <div className={styles.contacts}>
      {
        contacts.map(contact => (
          <ContactButton
            key={contact.link}
            {...contact}
          />
        ))
      }
    </div>
  </div>
);

EmpCard.propTypes = {
  photo: string,
  name: string,
  position: string,
  about: string,
  // eslint-disable-next-line react/forbid-prop-types
  contacts: array,
};

EmpCard.defaultProps = {
  photo: defaultPhoto,
  name: 'Igor Verkhoglyad',
  position: 'Top JS developer',
  about: 'The coolest guy!',
  contacts: [],
};

export default EmpCard;