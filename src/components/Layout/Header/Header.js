import React, { Fragment, useState } from 'react';
import classes from './Header.module.css';
import head1 from './assets/head1.jpg';
import head2 from './assets/head2.jpg';

const Header = props => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <Fragment>
    
    <header className={classes.header}>
      <img src={hovered ? head2 : head1} alt="Header im" className={classes.im} onMouseOver={handleHover} onMouseOut={handleLeave} />
    </header>
    </Fragment>
  );
};

export default Header;
