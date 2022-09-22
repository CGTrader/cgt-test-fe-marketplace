import React, { Component } from 'react';
import { ProductItems } from '../components/ProductItems';
import './PagesCss.css'


const products = ProductItems;

const allProducts = products.map((product) =>  product);

const allCharacters = allProducts.map((character) => character);

const firstCharacter = allCharacters[6];
const secondCharacter = allCharacters[7];


class Character extends Component { 
 render(){
  return(
    <>
      <div className='title'>
        <h1>CHARACTERS</h1>
      </div>
      <div className='body'>
      <p>
        {firstCharacter.brand}
      </p>
      <p>
        {firstCharacter.model}
      </p>
      <p>
        {firstCharacter.price}
      </p>
      <img src={firstCharacter.photo} alt={`${firstCharacter.brand} ${firstCharacter.model}`} />
      </div>
      
      <div>
      <p>
        {secondCharacter.brand}
      </p>
      <p>
        {secondCharacter.model}
      </p>
      <p>
        {secondCharacter.price}
      </p>
      <img src={secondCharacter.photo} alt={`${secondCharacter.brand} ${secondCharacter.model}`} />
      </div>
    </>
  );
 } 
}


export default Character;