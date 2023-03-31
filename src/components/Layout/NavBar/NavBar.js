import classses from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "../Header/HeaderCartButton";

const NavBar = (props) => {
  return (
    <nav className={classses.nav}>
      <ul className={classses.navList}>
        <li className={classses.navItem}>
          <NavLink className={classses.navNavLink} to="/home">
            Home
          </NavLink>
        </li>
        <li className={classses.navItem}>
          <NavLink className={classses.navNavLink} to="/store">
            Store
          </NavLink>
        </li>
        <li className={classses.navItem}>
          <NavLink className={classses.navNavLink} to="/aboutUs">
            About Us
          </NavLink>
        </li>
        <li className={classses.navItem}>
          <NavLink className={classses.navNavLink} to="/contactUs">
            Contact Us 
          </NavLink>
        </li>

        <HeaderCartButton onClick = {props.onShowCart}>Cart</HeaderCartButton>
      </ul>
    </nav>
  );
};

export default NavBar;
