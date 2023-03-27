import { Fragment } from "react";


import classes from "./NavBar.module.css";

const NavBar = (props) => {
 
 
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <nav className={classes.icon} to="/Home">
          HOME
        </nav>
        <nav className={classes.icon} to="/Store">
          STORE
        </nav>
        <nav className={classes.icon} to="/AboutUs">
          ABOUT
        </nav>
      </nav>
    </Fragment>
  );
};
export default NavBar;