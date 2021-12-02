import React, { useContext } from 'react';

//components 
import Cart from './Cart';

//context
import { Cartcontext } from '../context/CartContext';
import { Link } from 'react-router-dom';

//styles
import styles from "./carts.module.css"



const Carts = () => {

    const { state, dispatch } = useContext(Cartcontext)
    return (
        <div className={styles.maincontainer}>
            <div>
                {state.chooseditems.map(item => <Cart key={item.key} data={item} />)}
            </div>
            <div className={styles.sidebar}>
            {
                state.counter > 0 && <div>
                    <p>Total Items: {state.counter}</p>
                    <p>Total price: {state.total}</p>
                    <button className={styles.buttons} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                    <button className={styles.buttons} onClick={() => dispatch({ type: "CHECKOUT" })}>Checkout</button>
                </div>
            }

            {
                state.checkout && <div>
                    <h2>Checkedout Successfully</h2>
                    <Link to ="/products"> Want To Buy More ?</Link>
                </div>
            }

            {
                !state.checkout && state.counter === 0 && <div>
                    <h2>Want To Buy Something?!</h2>
                    <Link to="/products">Want To Buy SomeThing?!</Link>
                </div>
            }
            </div>

        </div>
    );
};

export default Carts;