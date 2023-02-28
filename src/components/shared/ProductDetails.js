import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../context/productcontext";

//styles
import styles from "./productdetails.module.css";
//context

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const products = useContext(ProductContext);
  const details = products[id - 1];
  const { image, title, description, price, category } = details;
  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <img src={image} alt="product" />
        <div className={styles.info}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
            <p> price: {price} $</p>
            <p>category: {category}</p>
            <Link to="/products">Back To Store</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
