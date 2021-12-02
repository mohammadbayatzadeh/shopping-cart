import React, { createContext, useReducer } from 'react';


const initialState = {
    chooseditems: [],
    counter: 0,
    total: 0,
    checkout: false,
}
const sumitems = items => {
    const counter = items.reduce((total, current) => total + current.count, 0)
    const total = items.reduce((total, current) => total + current.count * current.price, 0);
    return { counter, total };
}
const Cartreducer = (state, action) => {
    switch (action.type) {
        case "ADD-ITEM":
            if (!state.chooseditems.find(item => item.id === action.payload.id)) {
                state.chooseditems.push({
                    ...action.payload,
                    count : 1
                })
            }
            return {
                ...state,
                chooseditems: [...state.chooseditems],
                ...sumitems(state.chooseditems),
                checkout: false
            }
        case "REMOVE-ITEM":
            const newchooseditem = state.chooseditems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                chooseditems: [...newchooseditem],
                ...sumitems(newchooseditem)
            }
        case "INCREASE":
            const IndexA = state.chooseditems.findIndex(item => item.id === action.payload.id)
            state.chooseditems[IndexA].count++;
            return {
                ...state,
                ...sumitems(state.chooseditems)

            }
        case "DECREASE":
            const IndexB = state.chooseditems.findIndex(item => item.id === action.payload.id)
            state.chooseditems[IndexB].count--;
            return {
                ...state,
                ...sumitems(state.chooseditems)
            }
        case "CHECKOUT":
            return {
                chooseditems: [],
                counter: 0,
                total: 0,
                checkout: true,

            }
        case "CLEAR":
            return {
                chooseditems: [],
                counter: 0,
                total: 0,
                checkout: false,
            }
        default:
            return state;
    }
    ;
}

export const Cartcontext = createContext();

const CartContext = ({ children }) => {
    const [state, dispatch] = useReducer(Cartreducer, initialState)
    return (
        <Cartcontext.Provider value={{ state, dispatch }} >
            {children}
        </Cartcontext.Provider>
    );
};

export default CartContext;