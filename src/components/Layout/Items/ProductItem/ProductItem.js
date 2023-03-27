import { Fragment } from "react";
import classes from "./ProductItem.module.css";

const ProductItems = (props) => {
  return (
    <Fragment>
      <div className={classes.Items}>
        <button className={classes.button}>Add To cart</button>
      </div>
    </Fragment>
  );
};
export default ProductItems;
