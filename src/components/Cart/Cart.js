import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name} {item.price}
          <img src={item.image} alt={item.name} />
          <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
          <button onClick={() => cartCtx.addItem({...item, amount: 1})}>+</button>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>Total</div>
      <div className={classes["total-amount"]}>Rs. {cartCtx.totalAmount}</div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
