import React from 'react';
import classes from './Header.module.css';

const Header = props => {
  return (
    <div className={classes.header}>
      <h1 className={classes.htitle}>The Generics</h1>
    </div>
  );
};

export default Header;
