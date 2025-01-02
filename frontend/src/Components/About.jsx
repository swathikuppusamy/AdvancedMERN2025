import React from "react";
//import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Classcomp from "./ClassComponents/Classcomp";
import Funcomp from "./FunctionalComponents/FuncComp";
import UseContext from "./UseContext";
const About=()=>{
    return(
        <>
       
        <Classcomp/>
         <h2>This is About Page</h2>
         <UseContext/>
        </>
    )
}
export default About;