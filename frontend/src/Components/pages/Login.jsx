import React from 'react'

const Login = () => {
  return (
    <div>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="text"/><br />
        <label htmlFor="password">Password</label>
        <input type="text"/><br />
        <button  type='submit'>SignUp</button>
      
    </div>
  )
}

export default Login
