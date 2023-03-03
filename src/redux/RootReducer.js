import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/ProductReducer";

const rootReducer = combineReducers({
  cartState: cartReducer,
  productsState: productsReducer,
});

export default rootReducer;
