import React, { useContext } from 'react';

//context
import { Cartcontext } from '../context/CartContext';

//functions
import { shorten } from '../functions/function';

//styles
import styles from "./cart.module.css"

const Cart = (props) => {
    const {dispatch} = useContext(Cartcontext)
    const {image , title , price , count} = props.data
    return (
        <div className={styles.container}>
            <img src ={image} alt="product" />
            <div>
            <h3>title: {shorten(title)}</h3>
            <h4>price: {price} $</h4>
            </div>
            <span>{count}</span>
            <div className={styles.buttons_container}>
                {count > 1 ?
                <button className={styles.buttons} onClick={()=>dispatch({type:"DECREASE" , payload:props.data})}>-</button> :
                <button className={styles.buttons} onClick={()=>dispatch({type:"REMOVE-ITEM", payload:props.data})}>remove</button> 
                }
                <button className={styles.buttons} onClick={()=>dispatch({type:"INCREASE", payload:props.data})}>+</button>
            </div>
        </div>
        
    );
};

export default Cart;