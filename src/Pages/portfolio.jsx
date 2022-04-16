import React, {useState} from 'react'
import Nav from '../Components/TopNavBar'
import homechorepic from '../images/homechorepic.jpg'
import '../Pages/css/shared.css'
import Makeup from '../images/makeupsite.jpg'
const Portfolio=()=>{
const [title, setTitle]=useState('Portfolio')



    return(
        <div style={{minHeight:'700px'}} className="portfolioBody">
                  <header className="abtHdr">
 
 <h1 className="abtTitle">   {title}</h1>
<Nav/>  

        </header>
<h3> Portfolio Projects</h3>

<h4>Home Chore Tracker </h4>
<p>This first project I created to help keep me organized, with
     tasks that I wanted to be reminded of
      </p>
      <div> 
<img src={homechorepic} className="projpic" alt="project pic" />
<br></br>
<a className="projLink" href="https://home-chore-tracker-6e22a.web.app/"
target="blank">Home Chore Tracker</a>


</div>

<h4 style={{marginTop:'70px'}}>Makeup Store Website </h4>
<p>This project is a makeup store website
      </p>
<img src={Makeup} className="projpic" alt="project pic" />
<br></br>
<a className="projLink" href="https://makeup-f6.web.app/"
target="blank">Makeup Website</a>


</div>


    )
}
export default Portfolio