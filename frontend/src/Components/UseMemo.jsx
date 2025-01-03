import React, { useMemo, useState } from 'react'
var slowFunction =(number)=>{
    for(let i=0;i<100000;i++){}
    return number *2;
}
const UseMemo = () => {
    var [num,setNum]=useState(0);
    var [theme,update]=useState(true);
    var dlight={
        backgroundColor :(theme)?"black":"white",
        color:(theme)?"white":"black",
    }
    var doublingNumber=useMemo(()=>{
        return slowFunction(num);
    },[num])
  return (
    <div>
      <h1>This is useMemo function</h1>
      <input type='number' value={num} onChange={(e)=>setNum(e.target.value)}/>
      <div>
        <button onClick={()=>update(theme=!theme)}>Toggle Theme</button>
        <h2 style={dlight} >{doublingNumber}</h2>
      </div>
    </div>
  )
}

export default UseMemo
