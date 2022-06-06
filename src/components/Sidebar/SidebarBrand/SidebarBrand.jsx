import React, { useState } from "react";
import Brands from "../../Brands/Brands";

const SidebarBrand = () => {
   const [isBrandsOpened, setIsBrandsOpened] = useState(false);
   const changeBrandState = () => {
    setIsBrandsOpened(!isBrandsOpened);
  }

  return(
    <div className="sidebar-brand">
  <span>Brand</span>
  <button onClick={changeBrandState}>
  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1L8 9L1 1" stroke="#1E1E1E" strokeLinecap="round"/>
</svg>
  </button>
  <hr></hr>
  <div className='brand-dropdown'>
    {
    isBrandsOpened ? (
      <>
      <Brands />
      </>
    ) : (<></>) }
  
  </div>
  </div>
  )
}

export default SidebarBrand;