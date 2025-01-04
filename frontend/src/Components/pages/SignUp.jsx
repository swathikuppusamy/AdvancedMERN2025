import React from 'react'

const SignUp = () => {
  return (
    <div>
        <h2>SignIn</h2>
        <label htmlFor="firstname">First Name  </label>
        <input type="text"/><br />
        <label htmlFor="lastname">Last Name</label>
        <input type="text"/><br />
        <label htmlFor="email">Email</label>
        <input type="text"/><br />
        <label htmlFor="password">Password</label>
        <input type="text"/><br />
        <button  type='submit'>SignIn</button>
      
    </div>
  )
}

export default SignUp
