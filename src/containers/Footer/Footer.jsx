import React from 'react';
import FooterButton from './components';
import styles from './Footer.scss';

const Footer = () => {
  const buttons = [
    {
      label: 'Facebook ',
      link: 'https://www.facebook.com/',
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/',
    },
    {
      label: 'Google+',
      link: 'https://plus.google.com/discover',
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/',
    },
    {
      label: 'Behance',
      link: 'https://www.behance.net/',
    },
    {
      label: 'Dribbble',
      link: 'https://dribbble.com/',
    },
    {
      label: 'GitHub',
      link: 'https://github.com',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {
      buttons.map(button => (
        <FooterButton
          link={button.link}
          label={button.label}
          key={button.label}
        />
      ))
    }
      </div>
    </div>
  );
};

export default Footer;