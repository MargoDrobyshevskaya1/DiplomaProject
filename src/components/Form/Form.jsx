import React, { useState} from "react"

const Form = () => {
  const [style, setStyle] = useState('withoutform');

  const showForm = () => {
    console.log("you just clicked");
    setStyle('showForm');
  }
  return (
    <>
    
    <button onClick={showForm}>Log in</button>
  
   <div className={style}>
    <form>
      <input placeholder="User name"/>
      <input placeholder="Password"/>
     <button>Log in</button>
    </form>
      </div>
    </>
  )
}

export default Form;