import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent } from '@mui/material';
import { useDispatch } from 'react-redux';
import { products as productsAction } from '../../store/actions/products/products.actions';

const MyOrders = () => {
  const [addOrders, setAddOrders] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getOrders();
    dispatch(productsAction());
  }, []);
  const getOrders = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const resp = fetch('http://localhost:8000/users/me/orders/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    }).then(response => {
      return response.json();
    }).then((data) => {
      setAddOrders(data);
    });
  };
  return(
    <>
      <Box sx={{display: 'flex', justifyContent: 'space-between', width: 1000}}>
        {addOrders.map((order) => (
          <Card sx={{width: 300}} key={order.id}>
            <CardContent>
              <div>Number of your order: {order.id}</div>
              <div>Number of products: {order.products.length}</div>
              <div>Address: {order.address}</div>
              <div>Price: {order.products.reduce((prev, cur) => prev + Number(cur.price), 0)}</div>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default MyOrders;
