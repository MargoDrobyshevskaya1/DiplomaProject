import React, { useState} from "react"
import './Authorization.css'
const Authorization = () => {
  const [style, setStyle] = useState('withoutFormAuth');
  const [errorText, setErrorText] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const showLogOut = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  let content = null;
  if (isLoggedIn) {
    content = (
      <button>Log Out</button>
    )
  }
  
  const showFormAuth = () => {
    setStyle('showFormAuth');
  }

  const hideFormAuth = () => {
    setStyle('withoutFormAuth')
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
    }).then(resp => resp.json().then(data => ({
      data: data,
      status: resp.status,
      
      
    })
    ).then(response => {
      if (response.status >= 400 && resp.status <= 499) {
        setErrorText(response.data.detail)
      }else {
        localStorage.setItem('token', JSON.stringify(response.data));
      }
    }));
  }



  return (
    <>
    
    <button className="login" type="button" onClick={showFormAuth}>Log in</button>
    {content}
  
   <div className={style}>
    <form className="formAuth" onSubmit={login}>
      <input type='text' name="username" placeholder="Username"/>
      <input type='password' name="password" placeholder="Password"/>
      <label>{errorText}</label>
     <button type="submit" onClick={showLogOut}>Log in</button>
     <button type="button" onClick={hideFormAuth}>Close</button>
    </form>
      </div>
    </>
  )
}

export default Authorization;