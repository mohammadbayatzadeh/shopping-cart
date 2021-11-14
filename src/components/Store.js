import React, { useContext } from 'react';
//components
import Product from './shared/Product';

//context
import {Productcontext} from "../context/ProductContext"


const Store = () => {

    const products = useContext(Productcontext)
    
    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
            {products.map(item => <Product key={item.id} postData={item}/> )}
        </div>
    );
};

export default Store;