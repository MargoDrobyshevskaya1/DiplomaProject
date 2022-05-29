import React, { useState } from "react";
import './Registration.css'
 const  Registration = () => {
   const [style, setStyle] = useState('withoutFormRegist');
  const [massegeText, setMassegeText] = useState('');

   const showFormRegist = () => {
     setStyle('showFormRegist');
   }

   const register = (e) => {
    e.preventDefault();
    console.log('start')
     const respBody = {
       name: e.target.name.value,
       username: e.target.username.value,
       address: e.target.address.value,
       password: e.target.password.value,
     }
     const resp = fetch('http://localhost:8000/users/register/', {
       method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(respBody)
     }).then(response => 
     response.json().then(data => ({
       data: data,
       status: response.status
     })).then(resp => {
       if(resp.status  >= 400 && resp.status <= 499) {
         setMassegeText(resp.data.detail);
       } else setMassegeText('Registration completed successfully. Log in')
     })
     )
   }

   return (
     <>
     
     <button type="button" onClick={showFormRegist}>Registration</button>

     <div className={style}>
       <form className="formRegist" onSubmit={register}>
         <input type="text" name="name" placeholder="Name"/>
         <input type="text" name="username" placeholder="Username"/>
         <input type="text" name="address" placeholder="Address"/>
         <input type="password" name="password" placeholder="Password"/>
         <label>{massegeText}</label>
         <button type="submit">Register</button>
       </form>
     </div>
     </>
   )
 }

 export default Registration;