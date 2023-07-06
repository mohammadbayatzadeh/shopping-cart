import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { fetchProducts } from "../../redux/products/productsAction";

//styles
import styles from "./productdetails.module.css";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const product = productsState.products[id - 1] || {};

  useEffect(() => {
    document.title = product.title ? product.title : "loading";
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.maincontainer}>
      {productsState.loading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"black"}
          height={"20%"}
          width={"20%"}
        />
      ) : productsState.error ? (
        <h2>something went wrong...</h2>
      ) : (
        <div className={styles.container}>
          <img src={product.image} alt="product" />
          <div className={styles.info}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>category: {product.category}</p>
            <div className={styles.buttonsContainer}>
              <div className={styles.price}>{product.price} $</div>
              <Link to="/products" className={styles.backButton}>
                Back To Store
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
