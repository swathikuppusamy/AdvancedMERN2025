//import { useState } from 'react'
import './App.css'
//import Classcomp from './Components/ClassComponents/Classcomp.jsx'
//import Funcomp from './Components/FunctionalComponents/FuncComp.jsx'
import Navbar from './Components/FunctionalComponents/Navbar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Gallery from './Components/Gallery.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import UseEffectcom from './Components/UseEffectcom.jsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
   
     <BrowserRouter>
     <Navbar/>
     
     <Routes>
     <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/gallery'element={<Gallery/>}/>
      <Route path='/contact'element={<Contact/>}/>
     </Routes>
     <Footer/>
          </BrowserRouter>
     
  )
}

export default App
