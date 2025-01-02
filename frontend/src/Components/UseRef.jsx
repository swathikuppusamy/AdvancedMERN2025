import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    var [text,settext]=useState("")
    var prevtext=useRef("")
    useEffect(()=>{
        prevtext.current=text;
    },[text])
  return (
    <div>
      <h1>This is an example of use Reference</h1>
      <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />
      <h2>The current render is {text}</h2>
      <h3>the Previous render is {prevtext.current}</h3>

    </div>
  )
}

export default UseRef
