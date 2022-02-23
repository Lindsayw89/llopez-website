
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
const Header=()=>{
let navigate=useNavigate()


    return(
        <header className="wlcmHdr">
<section id="topPic">
    <nav className="topNav">
    <a className="lhover" onClick={()=>navigate("/")}>Home</a>
    <a className="lhover" onClick={()=>navigate("/aboutme")}>About Me</a>
    </nav>
   
  <h1 className="fName">  Lindsay Lopez</h1>
  <p> Software Developer</p>
  {/* <a> a link here</a> */}
 <nav className="iconsContact"> 
  <a href="https://www.linkedin.com/in/lindsay-lopez89/">
    <FaLinkedin  /> </a>
  <a href="https://github.com/Lindsayw89" ><FaGithubSquare  /> </a>
  <a href="mailto:lindsay.89@outlook.com"><FaEnvelope/> </a>
  </nav>
   </section>

            {/* <div id="pageLogo">
            <a href="/">Lindsay Lopez</a>
            </div>
            <nav>
                <ul>
                    <li><a href=" ">Contact me</a> </li>
                    <li>filler</li>
                </ul>
            </nav> */}
        </header>
    )
}
export default Header