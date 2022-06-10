import React from "react";
import {  useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { addToCart as addToCartAction } from '../../store/actions/cart/cart.actions'
import { useDispatch } from "react-redux";
import './Products.css'

export const productStyle = {
  backgroundColor: '#F7F4F2',
  border: 0,
  boxShadow: 0,
}



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const FormRow = () => {
  const productsShow = useSelector(state => state.products);
  const dispatch = useDispatch();
 
  const addProductToCard = (product) => {
    dispatch(addToCartAction(product))
  }
  

  return (
    
    <React.Fragment>
      { productsShow.length !== 0 ? productsShow.map((product) => (
      <Grid key={product.id} item xs={4} >
        <Item  sx= {productStyle}>
          <div className="productPicture">
         <img  src={product.image_link } alt="Photo" />
         </div>
        <div className="gridInf" key={product.id}>
          <p className="gridName">{product.name.toUpperCase()}</p>
          <p>{product.price}</p>
        </div>
      <button onClick={() => addProductToCard(product)}>Basket</button>
        </Item>
      </Grid>

      )) : (<></>)
      }
    </React.Fragment>

    
  )
}

const Products = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={5}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Products;