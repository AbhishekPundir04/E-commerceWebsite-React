import { useContext } from "react";
import { Fragment } from "react";
import ItemForm from "../ItemForm";
import CartContext from "../../../store/cart-context";

const ProductItems = (props) => {
  const cartCtx = useContext(CartContext);
    const addToCartHandler = amount =>{
      cartCtx.addItem({
        id:props.id,
        name: props.title,
        amount:amount,
        price: props.price,
        image: props.image

      })
    }
  return (
    <Fragment>
      <div>
        <h3>{props.title}</h3>
        <div>
          <img src={props.image}alt="some images"></img>
          <div>${props.price}</div>
        </div>
        <div>
           <ItemForm onAddToCart = {addToCartHandler}/> 
        </div>
      </div>
    </Fragment>
  );
};
export default ProductItems;