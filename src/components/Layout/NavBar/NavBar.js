import { Fragment } from "react";

import classes from "./NavBar.module.css";

const NavBar = (props) => {
 
 
  return (
    <Fragment>
      <header>
      <nav className={classes.navbar}>
        <nav className={classes.icon} to="/Home">
          HOME
        </nav>
        <nav className={classes.icon} to="/St
        <Headerore">
          STORE
        </nav>
        <nav className={classes.icon} to="/AboutUs">
          ABOUT
        </nav> 
      </nav>
      </header>
    </Fragment>
  );
};
export default NavBar;