
import React, {useState} from 'react'
import '../../Pages/css/about.css'
import {useNavigate} from 'react-router-dom'
import Nav from '../TopNavBar'

const HeaderAM=()=>{
let navigate=useNavigate()
const [title, setTitle]=useState("About Me")


    return(
        <header className="abtHdr">
 
 <h1 className="abtTitle">   {title}</h1>
<Nav/>  

        </header>
    )
}
export default HeaderAM