import Modal from "../UI/Modal";

const Cart = (props) => {
  // const cartItems = (
  //   <ul>
  //     {[
  //       {
  //         title: "Colors",

  //         price: 100,

  //         imageUrl:
  //           "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

  //         quantity: 2,
  //       },

  //       {
  //         title: "Black and white Colors",

  //         price: 50,

  //         imageUrl:
  //           "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

  //         quantity: 3,
  //       },

  //       {
  //         title: "Yellow and Black Colors",

  //         price: 70,

  //         imageUrl:
  //           "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

  //         quantity: 1,
  //       },
  //     ].map((item) => (
  //       <li>{item.title} {item.price} {<img src={item.imageUrl} alt={item.title} />}</li>
  //     ))}
  //   </ul>
  // );

  return (
    <Modal onClose ={props.onClose}>
      {/* {cartItems} */}
      <div>total</div>
      <div>$100</div>

      <div>
        <button onClick={props.onClose}>close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
