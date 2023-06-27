import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import Cart from "./Cart";

//actions
import { checkout, clear } from "../redux/cart/cartAction";

//styles
import styles from "./carts.module.css";
import { shorten } from "../functions/function";

const Carts = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Cart";
  }, []);

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
            <ul>
              {state.chooseditems.map((item) => (
                <li>{shorten(item.title)}  = ${item.price} *{item.count} = ${Math.floor(item.price*item.count)} </li>
              ))}
            </ul>
            <p>Total price: ${Math.floor(state.total)}</p>
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
