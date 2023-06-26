import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";

//components
import Product from "./shared/Product";

//Redux
import { fetchProducts } from "../redux/products/productsAction";

//styles
import styles from "./store.module.css";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    document.title = "Shop Cart Project";
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
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
        productsState.products.map((product) => (
          <Product key={product.id} postData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
