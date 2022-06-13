import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { products as productsAction } from '../store/actions/products/products.actions';


const AboutUs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
  });
  return (
    <>
      <h1>About Us</h1>
    </>
  );
};

export default AboutUs;
