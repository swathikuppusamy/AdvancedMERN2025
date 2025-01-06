import axios from 'axios';
import React, { useState } from 'react'

const SignUp = () => {
    const [firstName,setfname]=useState("");
    const [lastName,setlname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    var signin =()=>{
        var req=axios.post("https://localhost:3001/signup",{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
        console.log(req)
    }


  return (
    <div>
        <h2>SignIn</h2>
        <form action="">
        <label htmlFor="firstname">First Name  </label>
        <input type="text"/><br />
        <label htmlFor="lastname">Last Name</label>
        <input type="text"/><br />
        <label htmlFor="email">Email</label>
        <input type="text"/><br />
        <label htmlFor="password">Password</label>
        <input type="text"/><br />
        <button  type='submit'>SignIn</button>
        </form>
      
    </div>
  )
}

export default SignUp
