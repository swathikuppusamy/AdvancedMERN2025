import { useState } from 'react'
import './App.css'
import Classcomp from './Components/ClassComponents/Classcomp.jsx'
import Funcomp from './Components/FunctionalComponents/FuncComp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Classcomp/>
      <Funcomp/>
    </>
  )
}

export default App
