import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import HeaderCartButton from "../Header/HeaderCartButton";
const Navbar = (props) => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <NavLink className={classes.icon} to="/Home">
          Home
        </NavLink>
        <NavLink className={classes.icon} to="/Store">
          Store
        </NavLink>
        <NavLink className={classes.icon} to="/AboutUs">
          About
        </NavLink>
        <NavLink className={classes.icon} to="/Login">
          Login
        </NavLink>
        <NavLink className={classes.icon} to="/ContactUs">
          ContactUs
        </NavLink>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </nav>
    </Fragment>
  );
};
export default Navbar;
