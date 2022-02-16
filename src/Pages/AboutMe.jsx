
import React from 'react'
import '../Pages/css/shared.css'
import '../Pages/css/about.css'
import HeaderAM from '../Components/aboutMe/headerAM'
import ghostface from '../images/ghostface.jpg'
import maciAubrey from '../images/maciAubrey.jpg'
import boardgame from '../images/boardgame.jpg'
<style>

</style>
const AboutMe=()=>{



    return(
       <html>
<HeaderAM/>

<body>
    <p className="intro">Hi, my name is Lindsay and I live in Texas. I am an inquisitive person 
        who loves to learn new things whether its something about programming or
        something random that grabs my attention and interest. Here is a little 
        bit about me and what I enjoy doing in my free time. </p>
    <section className="interestSection">
       
        <div> 
    <h3>Dogs</h3>
    <p>I love animals and have a soft spot in my heart for dogs. My two dogs are Maci and Aubrey
         and they are the sweetest dogs. I love taking them on walks and being able to get some 
         fresh air. Dogs have such pure hearts and bring me so much happiness</p>
         </div>
         <div>  
        <img className="dogPic" src={maciAubrey} alt='dogs'/>
        </div>
    </section>

    <section className="interestSection">
    
    <div>
        <img className="ghostPic" src={ghostface}  alt='ghost'/>
    </div>
    <div> 
    <h3>Horror Movies</h3>
    <p>I'm a huge fan of horror movies. I love both good and bad ones. I like
        being scared or laughing at the corny ones. Being scared by a good 
        horror movie is so thrilling to me.
    </p>
         </div>   
    </section>

     <section className="interestSection">
     <div> 
    <h3>Board Games</h3>
    <p>I love playing games with family and friends. My favorites are the word
        guessing games, like taboo. It's such a fun way to spend time with loved
        ones and have a good laugh.
    </p>
         </div>
         <div>  
        <img className="gametime" src={boardgame} alt='dogs'/>
        </div>

   </section>
</body>
       </html>
      
    )
}
export default AboutMe