import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';
import Animal from './pages/Animal';
import Car from './pages/Car';
import Character from './pages/Characters'
import Space from './pages/Space';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/product/:id" component={ ProductDetails } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route exact path='/animal' component={Animal} />
          <Route exact path='/car' component={Car} />
          <Route exact path='/character' component={Character} />
          <Route exact path='/space' component={Space} />
          <Route exact path='/about' component={About} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }

export default App; 





