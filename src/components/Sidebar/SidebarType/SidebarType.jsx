import React, { useState } from "react";
import Type from "../../Type/Type";

const SidebarType = () => {
  const [isTypessOpened, setIsTypesOpened] = useState(false);
  const changeTypesState = () => {
    setIsTypesOpened(!isTypessOpened);
  }

  return (
    <div className="sidebar-type">
    <span>Type</span>
    <button onClick={changeTypesState}>
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1L8 9L1 1" stroke="#1E1E1E" strokeLinecap="round"/>
</svg>
    </button>
    <hr></hr>
  <div className='brand-dropdown'>
    {
    isTypessOpened ? (
      <>
      <Type />
      </>
    ) : (<></>) }
  
  </div>
  </div>
  )
}

export default SidebarType;