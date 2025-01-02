import React, { createContext } from 'react'
import Component2 from './Component2'
export  var ThemeProvider= createContext()

const UseContext = () => {
  return (
    <div>
        <ThemeProvider.Provider value={{cgpa:"10.00"}}>
     <h1> Hello this is UseContext parent component</h1>
     <Component2/>
        </ThemeProvider.Provider>
    </div>
  )
}

export default UseContext
