import React, { useEffect, useState } from 'react';

import { getproducts } from '../services/api';

export const Productcontext = React.createContext();

const ProductContext = (props) => {

    useEffect(()=>{
        const fetchAPI = async ()=>{
            setProducts(await getproducts())
        }

            fetchAPI();
    }, [])

    const [products , setProducts] = useState([])

    return (
        <Productcontext.Provider value={products}>
            {props.children}
        </Productcontext.Provider>
    );
};

export default ProductContext;