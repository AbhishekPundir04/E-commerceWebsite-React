import { Fragment } from "react";
const ProductItems = (props) => {
    
  return (
    <Fragment>
      <div>
        <h3>{props.title}</h3>
        <div>
          <img src={props.image}alt="some images"></img>
          <div>Rs. {props.price}</div>
          <button> Add Cart</button>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductItems;
