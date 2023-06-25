import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//styles
import styles from "./productdetails.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ProductDetails = (props) => {
  const { id } = props.match.params;
  const history = useHistory();
  const products = useSelector((state) => state.productsState.products);
  products.length === 0 && history.replace("/products");
  const details = products[id - 1];
  const { image, title, description, price, category } = details;
  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <img src={image} alt="product" />
        <div className={styles.info}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>category: {category}</p>
          <div className={styles.buttonsContainer}>
            <div className={styles.price}>{price} $</div>
            <Link to="/products" className={styles.backButton}>
              Back To Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
