import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styles } from '../Sidebar/SidebarType/SidebarType'
import { styleBrandsTypes } from '../Brands/Brands'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemText } from "@mui/material";
import { updateProducts as updateProductsAction } from "../../store/actions/products.actions";
import { useDispatch } from "react-redux";


import './Type.css'

const Type = () => { 
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [types, setTypes] = useState([]);

  const dispatch = useDispatch();
  
  
  // const addProduct = (arrayProduct) => dispatch(withProductsAction(arrayProduct))
  const handleListItemClick = (event, index, productType, categories) => {
    setSelectedIndex(index);
    const request = fetch(`http://localhost:8000/products?product_type=${productType}&category=${categories}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then((data) => {
      // addProduct(data);
      dispatch(updateProductsAction(data))
      
    })
  }; 
 
 useEffect(() => {
   request();
 }, []);
 const request = () => {
   const response = fetch('http://localhost:8000/product_types/', {
     method: 'GET',
     headers: {
       'Accept': 'application/json'
     }
   }).then((resp) => {
    return resp.json()}
  ).then((data) => {
    setTypes(data)
  } );
 }

 return (

   <ul>
      {types.map((type) => ( 
        <li key={type.id}> 
        <Accordion sx= {styles} className="accordion-categories">
      <AccordionSummary sx= {styles} expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" className="accordion">
        {type.name}
        </AccordionSummary>  
        <AccordionDetails sx= {styles}>
          
           <List component="nav" aria-label="main mailbox folders" sx={styleBrandsTypes}>
      {type.categories.map((categorie, index) => (
        
        <ListItemButton key={categorie.id}
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index, type.name, categorie.name)}  
        >
          
          <ListItemText primary={categorie.name} />
        </ListItemButton>
       
        
      ))}
        
        </List>
         
        </AccordionDetails>
    </Accordion>
    
         
        </li>
  
      ))}
    
   </ul>
 )
}

export default Type;
