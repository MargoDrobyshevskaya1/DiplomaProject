import React, { useState} from "react"
import './Form.css'
const Form = () => {
  const [style, setStyle] = useState('withoutform');
  
  const showForm = () => {
    console.log("you just clicked");
    setStyle('showForm');
  }

  const login = (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append('username', e.target.username.value);
    formData.append('password', e.target.password.value);
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    const resp = fetch('http://localhost:8000/auth', {
      method: 'POST',
      body: formData,
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    }).then((resp) => {
      return resp.json();
    }).then((data) => {
      console.log(data);
      localStorage.setItem('token', JSON.stringify(data));
      console.log(JSON.parse(localStorage.getItem('token')))
    })
  }
  return (
    <>
    
    <button type="button" onClick={showForm}>Log in</button>
  
   <div className={style}>
    <form className="form" onSubmit={login}>
      <input type='text' name="username" placeholder="Username"/>
      <input type='password' name="password" placeholder="Password"/>
     <button type="submit">Log in</button>
    </form>
      </div>
    </>
  )
}

export default Form;