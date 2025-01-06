import axios from 'axios';
import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'
const SignUp = () => {
    const [firstName,setfname]=useState("");
    const [lastName,setlname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    var navigate = useNavigate();
    var signin =async(event)=>{
      event.preventDefault();
        var req= await axios.post("http://localhost:3001/signup",{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
        console.log(req);
        navigate('/login');

    }


  return (
    <div>
        <h2>SignIn</h2>
        <form onSubmit={signin}>
        <label htmlFor="firstname">First Name  </label>
        <input type="text" value={firstName} onChange={(e)=>setfname(e.target.value)}/><br />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" value={lastName} onChange={(e)=>setlname(e.target.value)}/><br />
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/><br />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/><br />
        <button  type='submit'>SignUp</button>
        </form>
      
    </div>
  )
}

export default SignUp
