
import React from 'react'

const MainContent=()=>{



    return(
  <main className="mainBtm">



<h2 className="skillHeader">Skills</h2>
<ul className="skillList">
  <li>JavaScript </li>
  <li> React </li>
  <li>HTML </li>
  <li> CSS </li>
  <li> NodeJS </li>
  <li> MYSQL </li>
  <li></li>
  <li> Google Firebase </li>
</ul>


<section id="experience"> 
<h2> Experience</h2>
<div  className='experienceFlex'>
<div>
<h4>Software Developer</h4>
<p>Dates: November 2019- Present</p>
<p> Worked with JavaScript and react to create front end web pages</p>
</div>
<div>
<h4>Tutor</h4>
<p>Dates: March 2019- August 2020</p>
<p>Helped students learn HTML & CSS</p>
</div>
</div>
</section>

<section id="education" className="btmMain"> 
<h2> Education</h2>
<div  className='educationFlex'>
<div>
<h4>Lubbock coding Academy</h4>
<p>Graduated May 2020 </p>
<p> Web Development certificate</p>
</div>
<div>
<h4>Moorpark College</h4>
<p>Graduated June 2010</p>
<p>Associates Degree in General Studies</p>
</div>
</div>


</section>
  </main>
    )
}
export default MainContent
