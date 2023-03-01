import React from "react";
import { Link } from "react-router-dom";

//functions
import { shorten, isInCart, countCounter } from "../../functions/function";

//context

//styles
import styles from "./product.module.css";

const Product = ({ postData }) => {
  return (
    <div className={styles.product}>
      <img src={postData.image} alt="product" />
      <h2 className={styles.title}>{shorten(postData.title)}</h2>
      <p className={styles.price}>{postData.price} $</p>
      <div className={styles.buttons_container}>
        <Link to={`/products/${postData.id}`} className={styles.details}>
          details
        </Link>
        {/* <div>
          {countCounter(state, postData.id) === 1 && (
            <button
              className={styles.buttons}
              onClick={() =>
                dispatch({ type: "REMOVE-ITEM", payload: postData })
              }
            >
              remove
            </button>
          )}
          {countCounter(state, postData.id) > 1 && (
            <button
              className={styles.buttons}
              onClick={() => dispatch({ type: "DECREASE", payload: postData })}
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
              onClick={() => dispatch({ type: "INCREASE", payload: postData })}
            >
              +
            </button>
          ) : (
            <button
              className={styles.buttons}
              onClick={() => dispatch({ type: "ADD-ITEM", payload: postData })}
            >
              Add To Cart
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Product;
