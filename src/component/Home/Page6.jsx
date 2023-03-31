import React from "react";
import Wrapper from "./Wrapper";

export default function Page6() {
  return (
    <Wrapper>
      <div className="service_wrapper">
        <div >
          <p className="service_title">

            Soyez le premier au <br />
            courant quand nous<br />

            lançons le service
          </p>
          <div className="service_form">
            <input
              className="input_style1"

              type="text"
              placeholder="Entrez votre email" />
            <button className="btn_6">
              M’avertir
            </button>
          </div>
        </div>

        <img className="service_image" src="./imagefld/man.png" />
      </div>
    </Wrapper>
  );
}
