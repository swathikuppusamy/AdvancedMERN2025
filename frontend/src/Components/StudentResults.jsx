import React, { useContext } from 'react'
// import {  } from "module";
import { ThemeProvider } from './UseContext';
const StudentResults = () => {
    var result =useContext(ThemeProvider)
  return (
    <div>
      <h3>Yor result is: {result.cgpa}</h3>
    </div>
  )
}

export default StudentResults
