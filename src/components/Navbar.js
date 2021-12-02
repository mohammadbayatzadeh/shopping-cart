import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { Cartcontext } from '../context/CartContext';

//styles
import styles from "./navbar.module.css"
//images
import cartIcon from "../icons/shop.svg"

const Navbar = () => {
    const { state } = useContext(Cartcontext)
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Link to="/products">Products</Link>
                <div className={styles.shopicon}>
                    <Link to="/carts"><img src={cartIcon} alt="cart" /></Link>
                    <span>{state.counter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;