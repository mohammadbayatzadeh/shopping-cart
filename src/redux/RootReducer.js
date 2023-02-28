import { combineReducers } from "redux";
import productsReducer from "./products/ProductReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
});

export default rootReducer;
