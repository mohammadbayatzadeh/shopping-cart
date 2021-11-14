import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

//component
import Store from './components/Store';
import ProductDetails from './components/shared/ProductDetails';

//context
import Productcontext from './context/ProductContext';
import CartContext from './context/CartContext';

const App = () => {
  return (
    <Productcontext>
      <CartContext>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CartContext>
    </Productcontext>
  );
};

export default App;