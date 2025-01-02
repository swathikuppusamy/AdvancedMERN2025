import React, { useEffect, useState } from 'react'
import axios from "axios"
const UseEffectcom = () => {
    var [post,setpost]=useState([]);
    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/posts/").then((res)=>{
        console.log(res.data);
        setpost(res.data);
   
        }).catch((error)=>{
          console.log(error)
        })
    },[])
  return (
    <div>
      <h1>Fetching posts from json placeholder</h1>
      <h3>Posts are as follows</h3>
      <ol>
      {post.map((data)=>(
        <li key={data.userId}>{data.title}</li>
      ))}
      </ol>
    </div>
  )
}

export default UseEffectcom
