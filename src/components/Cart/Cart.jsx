import React, { useState } from 'react';
import { Drawer, Box, Button, List, ListItem } from '@mui/material';
import { useSelector } from 'react-redux/es/exports';
import './Cart.css';

const Сart = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const addProducts = useSelector(state => state.cart);

  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>
    
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5.5H23V21.2295C23 22.2073 22.2224 23 21.2632 23H2.73684C1.77761 23 1 22.2073 1 21.2295V5.5Z" stroke="#1E1E1E"/>
          <path d="M6 10V7.54545C6 3.9305 8.6863 1 12 1C15.3137 1 18 3.9305 18 7.54545V10" stroke="#1E1E1E" strokeLinecap="round"/>
          <path d="M12.375 19.1392C11.6259 19.1392 10.9879 18.9354 10.4609 18.5277C9.93395 18.1167 9.53125 17.5218 9.25284 16.7429C8.97443 15.9607 8.83523 15.0161 8.83523 13.9091C8.83523 12.8087 8.97443 11.8691 9.25284 11.0902C9.53456 10.308 9.93892 9.71141 10.4659 9.30043C10.9962 8.88613 11.6326 8.67898 12.375 8.67898C13.1174 8.67898 13.7521 8.88613 14.2791 9.30043C14.8094 9.71141 15.2138 10.308 15.4922 11.0902C15.7739 11.8691 15.9148 12.8087 15.9148 13.9091C15.9148 15.0161 15.7756 15.9607 15.4972 16.7429C15.2188 17.5218 14.8161 18.1167 14.2891 18.5277C13.7621 18.9354 13.1241 19.1392 12.375 19.1392ZM12.375 18.0455C13.1174 18.0455 13.6941 17.6875 14.1051 16.9716C14.5161 16.2557 14.7216 15.2348 14.7216 13.9091C14.7216 13.0275 14.6271 12.2768 14.4382 11.657C14.2526 11.0372 13.9841 10.5649 13.6328 10.2401C13.2848 9.91525 12.8655 9.75284 12.375 9.75284C11.6392 9.75284 11.0642 10.1158 10.6499 10.8416C10.2356 11.5642 10.0284 12.5866 10.0284 13.9091C10.0284 14.7907 10.1212 15.5398 10.3068 16.1562C10.4924 16.7727 10.7592 17.2417 11.1072 17.5632C11.4586 17.8847 11.8812 18.0455 12.375 18.0455Z" fill="#1E1E1E"/>
        </svg>
      </Button>
      
      <Drawer anchor="right" open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Box width='640px' role='presentation'>
          { addProducts.map((product) => (
            <List key={product.id}>
              <ListItem>
                <div>
                  <img src={product.image_link} alt="" />
                </div>
                <div>
                  {product.name}
                  {product.price}
                </div>
              </ListItem>
            </List>
          )
          )  
          }
        </Box>
       
      </Drawer>
   
     
    </>
  );
};  

export default Сart; 