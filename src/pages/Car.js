import React, { Component } from 'react';
import { ProductItems } from '../components/ProductItems';
import './PagesCss.css'


const products = ProductItems;

const allProducts = products.map((product) =>  product);

const allCars = allProducts.map((car) => car);

const firstCar = allCars[0];
const secondCar = allCars[1];


class Car extends Component { 
 render(){
  return(
    <>
      <div className='title'>
        <h1>CARS</h1>
      </div>
      <div className='body'>
      <p>
        {firstCar.brand}
      </p>
      <p>
        {firstCar.model}
      </p>
      <p>
        {firstCar.price}
      </p>
      <img src={firstCar.photo} alt={`${firstCar.brand} ${firstCar.model}`} />
      </div>
      
      <div>
      <p>
        {secondCar.brand}
      </p>
      <p>
        {secondCar.model}
      </p>
      <p>
        {secondCar.price}
      </p>
      <img src={secondCar.photo} alt={`${secondCar.brand} ${secondCar.model}`} />
      </div>
    </>
  );
 } 
}

export default Car;