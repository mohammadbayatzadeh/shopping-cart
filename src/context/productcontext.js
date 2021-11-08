import React, { useEffect, useState } from 'react';

import { getproducts } from '../services/api';

const productcontext = React.createContext();

const Productcontext = (props) => {

    useEffect(()=>{
        const fetchAPI = async ()=>{
            setProducts(await getproducts())
        }

            fetchAPI();
    }, [])

    const [products , setProducts] = useState([])

    return (
        <productcontext.Provider value={products}>
            {props.children}
        </productcontext.Provider>
    );
};

export default Productcontext;