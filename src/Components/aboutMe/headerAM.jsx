
import React from 'react'
import '../../Pages/css/about.css'
import {useNavigate} from 'react-router-dom'

const HeaderAM=()=>{
let navigate=useNavigate()


    return(
        <header className="abtHdr">
 
 <h1 className="abtTitle">  About Me</h1>
    <nav className="abtNav">
    <a className="lhover" onClick={()=>navigate("/")}>Home</a>
    <a className="lhover" onClick={()=>navigate("/aboutme")}>About Me</a>
    </nav>
  

   

       
        </header>
    )
}
export default HeaderAM