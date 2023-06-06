import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import Cart from "./Cart";

//actions
import { checkout, clear } from "../redux/cart/cartAction";

//styles
import styles from "./carts.module.css";

const Carts = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className={styles.maincontainer}>
      <div>
        {state.chooseditems.map((item) => (
          <Cart key={item.key} data={item} />
        ))}
      </div>
      <div className={styles.sidebar}>
        {state.counter > 0 && (
          <div>
            <p>Total Items: {state.counter}</p>
            <p>Total price: {state.total}</p>
            <button
              className={styles.buttons}
              onClick={() => dispatch(clear())}
            >
              Clear
            </button>
            <button
              className={styles.buttons}
              onClick={() => dispatch(checkout())}
            >
              Checkout
            </button>
          </div>
        )}

        {state.checkout && (
          <div>
            <h2>Checkedout Successfully</h2>
            <Link to="/products"> Want To Buy More ?</Link>
          </div>
        )}

        {!state.checkout && state.counter === 0 && (
          <div>
            <h2>Want To Buy Something?!</h2>
            <Link to="/products">Want To Buy SomeThing?!</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
