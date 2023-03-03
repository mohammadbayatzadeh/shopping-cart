import React from "react";
import { useDispatch } from "react-redux";

//actions
import { decrease, increase, removeItem } from "../redux/cart/cartAction";

//functions
import { shorten } from "../functions/function";

//styles
import styles from "./cart.module.css";

const Cart = (props) => {
  const dispatch = useDispatch();

  const { image, title, price, count, id } = props.data;

  return (
    <div className={styles.container} key={id}>
      <img src={image} alt="product" />
      <div>
        <h3>title: {shorten(title)}</h3>
        <h4>price: {price} $</h4>
      </div>
      <span>{count}</span>
      <div className={styles.buttons_container}>
        {count > 1 ? (
          <button
            className={styles.buttons}
            onClick={() => dispatch(decrease(props.data))}
          >
            -
          </button>
        ) : (
          <button
            className={styles.buttons}
            onClick={() => dispatch(removeItem(props.data))}
          >
            remove
          </button>
        )}
        <button
          className={styles.buttons}
          onClick={() => dispatch(increase(props.data))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
