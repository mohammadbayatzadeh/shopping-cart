import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorten, isInCart , countCounter } from '../../functions/function';

//context
import {Cartcontext} from "../../context/CartContext"

const Product = ({postData}) => {

    const {state , dispatch} = useContext(Cartcontext);

    return (
        <div>
            <img src={postData.image} alt="product"style={{width:"200px"}}/>
            <h2>{shorten(postData.title)}</h2>
            <p>{postData.price} $</p>
            <div>
                <Link to={`/products/${postData.id}`}>details</Link>
               
                {countCounter(state , postData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE-ITEM" , payload:postData})}>remove</button> }
                {countCounter(state , postData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE" , payload:postData})}>-</button> }
                {countCounter(state , postData.id) && <span>{countCounter(state , postData.id)}</span>}

                {isInCart(state , postData.id) ?
                <button onClick={() => dispatch({type:"INCREASE" , payload:postData})}>+</button> :
                <button onClick={() => dispatch({type:"ADD-ITEM" , payload:postData})}>Add To Cart</button> 
                }
            </div>
        </div>
    );
};

export default Product;