import React from 'react';
import Title from 'Shared/Title';
import Dash from 'Shared/Dash';
import Description from 'Shared/Description';
import MessageForm from './components/MessageForm';

import styles from './Feedback.scss';

const Feedback = () => (
  <div className={styles.feedback}>
    <Title text="GET IN TOUCH" />
    <Dash />
    <Description text="1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111" />
    <MessageForm />
  </div>
);

export default Feedback;