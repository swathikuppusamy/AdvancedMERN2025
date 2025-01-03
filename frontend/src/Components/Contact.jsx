import React from "react";
//import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Classcomp from "./ClassComponents/Classcomp";
import Funcomp from "./FunctionalComponents/FuncComp";
import UseMemo from "./UseMemo";
const Contact=()=>{
    return(
        <>
        <Classcomp/>
        <Funcomp/>
        <UseMemo/>
        </>
    )
}
export default Contact;