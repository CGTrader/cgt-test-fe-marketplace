import React, { Component } from 'react';
import { ProductItems } from '../components/ProductItems';
import './PagesCss.css'


const products = ProductItems;

const allProducts = products.map((product) =>  product);

const allSpaces = allProducts.map((space) => space);

const firstSpace = allSpaces[2];
const secondSpace = allSpaces[3];


class Space extends Component { 
 render(){
  return(
    <>
      <div className='title'>
        <h1>SPACE</h1>
      </div>
      <div className='body'>
      <p>
        {firstSpace.brand}
      </p>
      <p>
        {firstSpace.model}
      </p>
      <p>
        {firstSpace.price}
      </p>
      <img src={firstSpace.photo} alt={`${firstSpace.brand} ${firstSpace.model}`} />
      </div>
      
      <div>
      <p>
        {secondSpace.brand}
      </p>
      <p>
        {secondSpace.model}
      </p>
      <p>
        {secondSpace.price}
      </p>
      <img src={secondSpace.photo} alt={`${secondSpace.brand} ${secondSpace.model}`} />
      </div>
    </>
  );
 } 
}


export default Space;