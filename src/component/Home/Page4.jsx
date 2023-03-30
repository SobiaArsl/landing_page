import React from "react";
import Wrapper from "./Wrapper"



export default function Page4(){
     
    return(
        <Wrapper>

<div className="page4">
             <div className="imgpage4"> 
             <img src=" ./imagefld/content.png" /></div>
              <div className="write4">
                <p className="blue"> <b/>weezee Map</p>
              <h1 className ="headingp4">
              à l’extérieur,
               économisez<br/> les Go de votre forfait
            </h1>
            <div className="fitmge"> 
            <img src="./svg/icon.svg" />
            <p className="paragraph_2" >
            Plus d’1M de Réseaux WiFi
             référencés<br/> partout dans le monde
            </p>
                 </div>
        <div className="fitmge"> 
        <img src="./svg/icon2.svg" />
       <p className="paragraph_2" >
       +100k réseaux aux Antilles
       </p>
        </div>
        <div className="  img_page_2"> 
             <img src=" ./imagefld/content.png" /></div>
             
             </div></div> 
            {/* </div> */}
             </Wrapper>
    );
}