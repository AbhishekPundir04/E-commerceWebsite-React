import { useContext } from "react";
import CartIcon from "../../Cart/CartIcon"
import CartContext from "../../Store/cart-context";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext)
  const numberofcartItem = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  }, 0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.value}>{numberofcartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
