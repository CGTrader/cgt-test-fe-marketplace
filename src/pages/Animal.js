import React, { Component } from 'react';
import { ProductItems } from '../components/ProductItems';
import './PagesCss.css'


const products = ProductItems;

const allProducts = products.map((product) =>  product);

const allAnimals = allProducts.map((animal) => animal);

const firstAnimal = allAnimals[4];
const secondAnimal = allAnimals[5];


class Animal extends Component { 
 render(){
  return(
    <>
      <div className='title'>
        <h1>ANIMALS</h1>
      </div>
      <div className='body'>
      <p>
        {firstAnimal.brand}
      </p>
      <p>
        {firstAnimal.model}
      </p>
      <p>
        {firstAnimal.price}
      </p>
      <img src={firstAnimal.photo} alt={`${firstAnimal.brand} ${firstAnimal.model}`} />
      
      <div>
        <button>ADD-CART</button>
      </div>
      
      </div>
      
      <div>
      <p>
        {secondAnimal.brand}
      </p>
      <p>
        {secondAnimal.model}
      </p>
      <p>
        {secondAnimal.price}
      </p>
      <img src={secondAnimal.photo} alt={`${secondAnimal.brand} ${secondAnimal.model}`} />

      <div>
        <button>ADD-CART</button>
      </div>
      
      </div>
    </>
  );
 } 
}


export default Animal;