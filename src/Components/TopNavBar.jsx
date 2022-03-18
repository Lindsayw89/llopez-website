import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Nav=()=>{
    let navigate=useNavigate()



    return(
        <nav className="topNav">
        <a className="lhover" onClick={()=>navigate("/")}>Home</a>
        <a className="lhover" onClick={()=>navigate("/aboutme")}>About Me</a>
        <a className="lhover" onClick={()=>navigate("/portfolio")}>Portfolio</a>
        </nav>
    )
}
export default Nav