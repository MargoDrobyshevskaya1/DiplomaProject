import React from 'react';
import {  useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import {Box, Paper, Grid, Pagination} from '@mui/material';
import { useEffect } from 'react';
import { addToCart as addToCartAction } from '../../store/actions/cart/cart.actions';
import { updateProducts as updateProductsAction } from '../../store/actions/products/products.actions';
import { updatePageQty as  updatePageQtyAction} from '../../store/actions/pageQty/pageQty.actions';
import { updatePage as updatePageAction } from '../../store/actions/pageNumber/pageNumber.actions';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../api/constants/urls';
import './Products.css';
import { useRef } from 'react';

export const productStyle = {
  backgroundColor: '#F7F4F2',
  border: 0,
  boxShadow: 0,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FormRow = () => {
  const productsShow = useSelector(state => state.products);
  const doQuery = useSelector(state => state.query);
  const getPageNumber = useSelector(state => state.pageNumber);
  const isMounted = useRef(false);
  const dispatch = useDispatch();
  const addProductToCard = (product) => {
    dispatch(addToCartAction(product));
  };

  const handleListItemClick = ( productType, categories, getPageNumber) => {
    
    const request = fetch(`${BASE_URL}/products?product_type=${productType}&category=${categories}&page=${getPageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      dispatch(updatePageQtyAction(data.pages_count));
      dispatch(updateProductsAction(data.products));
    });
    
    
  }; 

  useEffect(() => {
    
    if(isMounted.current) {
      console.log('useeffect work');
      handleListItemClick( doQuery.productType, doQuery.category, getPageNumber);
    } else {
      console.log('useeffect will not work');
      isMounted.current = true;
    }
  }, [doQuery, getPageNumber]);

  return ( 
    <React.Fragment>
      { Object.keys(productsShow).length !== 0 ? productsShow.map((product) => (
        <div key={product.id} className="grid">
          <Grid container justifyContent='flex-start' item xs={4} >
            <Item  sx={productStyle}>
              <div className="productPicture">
                <img  src={product.image_link } alt="Photo" />
              </div>
              <div className="gridInf" key={product.id}>
                <p className="gridName">{product.name.toUpperCase()}</p>
                <p className="gridPrice">${product.price}</p>
              </div>
              <div>
                <button className="addToCart-btn" onClick={() => addProductToCard(product)}>
                  <span>Buy</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5H23V21.2295C23 22.2073 22.2224 23 21.2632 23H2.73684C1.77761 23 1 22.2073 1 21.2295V5.5Z" stroke="#F7F4F2"/>
                    <path d="M6 10V7.54545C6 3.9305 8.6863 1 12 1C15.3137 1 18 3.9305 18 7.54545V10" stroke="#F7F4F2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </Item>
          </Grid>

        </div>
      )) : (<></>)
      }
    </React.Fragment>
  );
};

const Products = () => {
  const getPageQty = useSelector(state => state.pageQty);
  const getPageNumber = useSelector(state => state.pageNumber);
  const addPagination = useSelector(state => state.pagination);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    dispatch(updatePageAction(value));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ justifyContent: 'center'}} container spacing={1}>
        <Grid sx={{ alignItems: 'center' }} container item spacing={3}>
          <FormRow />
        </Grid>
        { getPageQty !== 1 && addPagination === true ? <Pagination sx={{ marginTop: 20 }} count={getPageQty} page={getPageNumber} onChange={handleChange} /> : <></> }
      </Grid>
    </Box>
  );
  
};

export default Products;
