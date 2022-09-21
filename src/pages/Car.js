import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cars from '../components/Cars';

import { getAllCars } from '../store/fetchActions'
import { addItem } from '../store/ducks/cart';

export default function List(){
	const cars = useSelector((state) => state.cars );
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getAllCars());
		},
		[ dispatch ]
	);

	function addItemCart(car) {
		dispatch(addItem(car))
	}
	
  return(
    <div className='container-fluid'>
      <h1 className='cars' >CARS</h1>
      <div className='row'>
        {cars.map((car, index) => <Cars key={index} car={car} addItemCart={addItemCart} />)}
      </div>
    </div>
  );
} 
