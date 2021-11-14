import React from 'react';
import { Link } from 'react-router-dom';
//functions
import { shorten } from '../../functions/function';
const Product = ({postData}) => {
    return (
        <div>
            <img src={postData.image} alt="product"style={{width:"200px"}}/>
            <h2>{shorten(postData.title)}</h2>
            <p>{postData.price} $</p>
            <div>
                <Link to={`/products/${postData.id}`}>details</Link>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Product;