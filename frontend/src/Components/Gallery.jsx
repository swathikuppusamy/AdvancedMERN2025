import React from "react";
//import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Classcomp from "./ClassComponents/Classcomp";
import Funcomp from "./FunctionalComponents/FuncComp";
import UseEffectcom from "./UseEffectcom";
const Gallery=()=>{
    return(
        <>
        <UseEffectcom/>
        <Classcomp/>
        <Funcomp/>
        </>
    )
}
export default Gallery;