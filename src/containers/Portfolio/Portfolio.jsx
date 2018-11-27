import React from 'react';
import Title from 'Shared/Title';
import Dash from 'Shared/Dash';
import Description from 'Shared/Description';
import Button from 'Shared/Button';
import Menu from './components/Menu';
import PortfolioCard from './components/PortfolioCard';

import FlatUiKitImg from './components/PortfolioCard/assets/FlatUiKit.png';
import MediaPlayersImg from './components/PortfolioCard/assets/MediaPlayers.png';
import MockUpImg from './components/PortfolioCard/assets/MockUp.png';
import TimeZoneImg from './components/PortfolioCard/assets/TimeZone.png';

import styles from './Portfolio.scss';

const Portfolio = () => {
  const cards = [
    {
      image: MockUpImg,
      title: 'Isometric Perspective Mock-Up',
    },
    {
      image: TimeZoneImg,
      title: 'Time Zone App UI',
    },
    {
      image: MediaPlayersImg,
      title: 'Viro Media Players UI',
    },
    {
      image: FlatUiKitImg,
      title: 'Blog / Magazine Flat UI Kit',
    },
  ];

  return (
    <div className={styles.portfolio}>
      <Title text="Our Portfolio" color="brown" />
      <Dash />
      <Description
        color="brown"
        text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
       consectetur, adipisci velit, sed quia non numquam"
      />
      <Menu buttons={['All', 'Web', 'Apps', 'Icons']} />
      <div className={styles.cardContainer}>
        {
        cards.map(card => (
          <PortfolioCard {...card} key={card.title} />
        ))
      }
      </div>
      <Button
        btnType="button"
        className={styles.button}
        label="LOAD MORE PROJECTS"
      />
    </div>
  );
};

export default Portfolio;