import React from "react";
import Wrapper from "./Wrapper";

export default function Page1() {
  return (
    <Wrapper>
    {/* <div className="wrapper"> */}
      {
        <div className="page1">
          <div className="content">
            <h1 className="head">
            WiFi illimité à l’extérieur,<br/>à prix cassé !
            </h1>
            <p className="paragraph">
              Depuis 2014, note mission around serious concern faclement aux
              reseaux 
              wifis proche de vous grade a une application complete et
              novatrice.
              <div className="pg1img">
                <img src="./imagefld/mb.png" />
                <img src="./imagefld/mb2.png" />
              </div>
              <div className="dn1">
                Nouvelle version 
                bientit disponible
               <div> <img src="./svg/arrow.svg" /></div>
              </div>
             
            </p>
          </div>
          <div className=" img_page_1">
            <img src="./svg/pagmob.svg" />

          </div>
          <div className=" img_page_2">
            <img src="./svg/nav_img_2.svg" />

          </div>
          
        </div>
      }
    {/* </div> */}
    </Wrapper>
  );
}
