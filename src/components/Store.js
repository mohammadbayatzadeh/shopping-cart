import React, { useContext } from 'react';

//components
import Product from './shared/Product';

//context
import {Productcontext} from "../context/ProductContext"

//styles
import styles from "./store.module.css"

const Store = () => {

    const products = useContext(Productcontext)
    
    return (
        <div className={styles.container}>
            {products.map(item => <Product key={item.id} postData={item}/> )}
        </div>
    );
};

export default Store;