import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { Cartcontext } from '../context/CartContext';

//images
import cartIcon from "../icons/shop.svg"

const Navbar = () => {
    const {state} = useContext(Cartcontext)
    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/cart"><img src ={cartIcon} alt="cart"/></Link>
                <span>{state.counter}</span>
            </div>
        </div>
    );
};

export default Navbar;