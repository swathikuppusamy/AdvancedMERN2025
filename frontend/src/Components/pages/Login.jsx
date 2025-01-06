import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var navigate=useNavigate();

  var Login = async(event) => {
    event.preventDefault()
    var req = await axios.post("http://localhost:3001/login", {
        email: email,
        password: password
    })
    console.log(req.data);
    var isLoginSuccessful =req.data.isLoggedIn
    console.log(isLoginSuccessful)
    if(isLoginSuccessful){
        navigate('/')
        var message=req.data.message
        console.log(message);
    }
    else{
        alert("Wrong Crdentials");
    }
    
}

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={Login}>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/><br />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
        <button  type='submit'>SignUp</button>
        </form>
      
    </div>
  )
}

export default Login
