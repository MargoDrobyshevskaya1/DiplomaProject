import React from "react";
import Brands from "../../Brands/Brands";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styles} from '../SidebarType/SidebarType'
import './SidebarBrand.css'

const SidebarBrand = () => {
   

  return(
    <>
    <Accordion sx= {styles}>
      <AccordionSummary sx= {styles}
           expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" className="accordion">
        Brand
        </AccordionSummary>  
        <AccordionDetails>
          <Brands />
        </AccordionDetails>
    </Accordion>
    </>
  )
}

export default SidebarBrand;