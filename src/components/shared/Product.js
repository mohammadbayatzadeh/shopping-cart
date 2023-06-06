import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//functions
import { shorten, isInCart, countCounter } from "../../functions/function";

//Actions
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../redux/cart/cartAction";

//styles
import styles from "./product.module.css";

const Product = ({ postData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className={styles.product}>
      <img src={postData.image} alt="product" />
      <h2 className={styles.title}>{shorten(postData.title)}</h2>
      <h4 className={styles.cat}>{postData.category}</h4>
      <p className={styles.price}>Price: {postData.price} $</p>
      <div className={styles.buttons_container}>
        <Link to={`/products/${postData.id}`} className={styles.details}>
          details
        </Link>
        <div className={styles.balance}>
          {countCounter(state, postData.id) === 1 && (
            <button
              className={styles.buttons}
              onClick={() => dispatch(removeItem(postData))}
            >
              remove
            </button>
          )}
          {countCounter(state, postData.id) > 1 && (
            <button
              className={styles.buttons}
              onClick={() => dispatch(decrease(postData))}
            >
              -
            </button>
          )}
          {countCounter(state, postData.id) && (
            <span>{countCounter(state, postData.id)}</span>
          )}

          {isInCart(state, postData.id) ? (
            <button
              className={styles.buttons}
              onClick={() => dispatch(increase(postData))}
            >
              +
            </button>
          ) : (
            <button
              className={styles.buttons}
              onClick={() => dispatch(addItem(postData))}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
