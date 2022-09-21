import React, { Component } from 'react';
import '../App.css'

class Cart extends Component {
  render() {
    return (
      <>
        <h1 className='cart-container'>CART</h1>
        <p className="mt-5 text-warning text-center">Cart without producst ! =S </p>;
      </>
    );
  }
}

export default Cart;