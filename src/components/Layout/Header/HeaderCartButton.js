import { Fragment} from "react";
import classes from "./HeaderCartButton.module.css";


const HeaderCartButton = (props) => {
  
  

  return (
    <Fragment>
      <button onClick={props.onClick} className={classes.button}>
        <span>Cart</span>
        <span className={classes.badge}></span>
      </button>
      
    </Fragment>
  );
};
export default HeaderCartButton;