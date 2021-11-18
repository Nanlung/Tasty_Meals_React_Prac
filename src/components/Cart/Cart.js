import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Chicken", amount: 4, price: 10.99 }].map(
        (cartItem) => (
          <li>{cartItem.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal>
      <div className={classes.total}>
        {cartItems}
        <span>Total Amount</span>
        <span>40.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
