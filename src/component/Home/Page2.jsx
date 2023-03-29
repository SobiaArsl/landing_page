import React from "react";
import Wrapper from "./Wrapper";

export default function page2() {
  return (
    <Wrapper>
      <div className="page2">
        <div className="head2">
          <h1 className="heilght">Connexion Automatique au WiFi autours de vous</h1>

          <p className="paragraph">
            Grâce à notre réseau de partenaires, nous vous connectons
            automatiquement aux réseaux WiFis proches de chez vous. Aucune
            configuration requise.
          </p>
        </div>
        <div className="head1">
          <div className="head_1_style">
            <div className="fitmge">
              <img src="./svg/icon2.svg" />
              <p>
                Vérifiez quotidiennement le nombre de connexions qu'il vous
                reste en 1 clic.
              </p>
            </div>
            <div className="fitmge">
              <img src="./svg/icon.svg" />
              <p>
                Aucune configuration requise / Fonctionne avec tous les
                appareils.
              </p>
            </div>
          </div>

          <div className="imgpg2">
            <img src="./imagefld/3screen.png" />
          </div>
          <div className=" img_page_2">
            <img src="./svg/nav_img_2.svg" />

          </div>
        </div>
      </div>
    </Wrapper>
  );
}
