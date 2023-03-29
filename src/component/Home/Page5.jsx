import React from "react";
//  import logo from "../../logo.svg";
import Wrapper from "./Wrapper";

export default function Page5() {
  return (
    <Wrapper>
      <div className="page_5">
        <div className="p5writing">
         <h1 className="headingp4">Des tarifs simples, <br />
          sans mauvaise <br />
          surprise</h1>
          <div className="paragraph_2">
            Une tarification simple et transparente qui <br />
            évolue selon vos besoins. Passez d’un forfait à <br />
            l’autre facilement depuis votre application.
          </div>
        </div>
        <div className="card_p5">
          <div className="card_1">
            <h3 className="headingp5"> 4,99€ / mo</h3>
            {/* <p> */}
              
             <h4 className="wcn5"> Weezee Map Premium</h4>
             <p className="paragraph_1">  100 connexions</p>
             <div className="crd_contnt">
              <div className="crd_img">
               <div><img src="./svg/page3.svg" /></div> 
                cAccès à notre base de données de <br />
                réseaux WiFis aux
                <br /> Antilles
              </div>
              <div className="crd_img">
                <img src="./svg/page3.svg" /> Créez des QR Codes WiFi
              </div>
              <div className="crd_img">
              <div><img src="./svg/page3.svg" /></div> 
                Partagez votre réseau WiFi
                <br />
                avec votre entourage <br />
                facilement
              </div>
              <div className="crd_img">
              <div><img src="./svg/page3.svg" /></div> 
                Connectez-vous à des réseaux
                <br /> WiFis dans plus de 100 pays <br />
                dans le monde
              </div>
              </div>
            {/* </p> */}
          </div>
          <div className="card_2">
            <h3 className="headingp5_2"> 12,99€ / mois</h3>
            <h4 className="wcn5"> Weezee Map Pro</h4>
            <p className="wcn5"> Connexions illimitées</p>
            <div className="crd_contnt">
            <div className="crd_img">
            <div><img src="./svg/page3.svg" /></div> 
                cAccès à notre base de données de <br />
                réseaux WiFis aux
                <br /> Antilles
              </div>
              <div className="crd_img">
              <div><img src="./svg/page3.svg" /></div> 
               Créez des QR Codes WiFi
              </div>
              <div className="crd_img">
              <div><img src="./svg/page3.svg" /></div> 
                Partagez votre réseau WiFi
                <br />
                avec votre entourage <br />
                facilement
              </div>
              <div className="crd_img">
              <div><img src="./svg/page3.svg" /></div> 
                Connectez-vous à des réseaux
                <br /> WiFis dans plus de 100 pays <br />
                dans le monde
              </div>
              <div className="crd_img">
              <div><img src="./svg/page3.svg" /></div> 
                Connexions illimitées
              </div>
              </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
