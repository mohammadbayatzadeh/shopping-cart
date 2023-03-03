import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

//component
import Store from "./components/Store";
import ProductDetails from "./components/shared/ProductDetails";
import Navbar from "./components/Navbar";
import Carts from "./components/Carts";

//Redux
import store from "./redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Route path="/carts" component={Carts} />
        <Redirect to="/products" />
      </Switch>
    </Provider>
  );
};

export default App;
