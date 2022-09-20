import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/products" component={ Products } />
          <Route exact path="/product/:id" component={ ProductDetails } />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }

export default App; 
