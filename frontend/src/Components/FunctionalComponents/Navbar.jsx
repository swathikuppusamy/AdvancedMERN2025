import React from "react";
import '../../assets/Navbar.css'
import {Link} from "react-router-dom"
var Navbar=()=>{
//   var navcss={
//     fontSize : "30px",
//     color:"green"
// }
  return (
    <header>
    <nav>
    <ul>
    <li ><Link to='/' className="link">Home </Link></li>
    <li><Link to='/about' className="link">About </Link></li>
    <li><Link to='/gallery' className="link">Gallery</Link> </li>
    <li><Link to='/contact' className="link">Contact</Link> </li>
    </ul>
    </nav>
    </header>
  )
}
export default Navbar;