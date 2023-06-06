import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//styles
import styles from "./navbar.module.css";
//images
import cartIcon from "../icons/shop.svg";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/products">Shop Cart</Link>
        <div className={styles.shopicon}>
          <Link to="/carts">
            <img src={cartIcon} alt="cart" />
          </Link>
          <span>{state.counter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
