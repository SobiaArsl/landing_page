import React from "react";
import Link from "../Link";
import Wrapper from "./Wrapper";
// import Wrapper from "./Wrapper";

export default function Navbar() {
  return (
    // <div>
      <Wrapper>

      <div className="navimg">
        <div className="nav_2">
          <p>
            <img src="./svg/nav.svg" />{" "}
          </p>
          <div className="st">
            {/* <Link title="L appllication" />
          <Link title="Weeze Map" />
          <Link title="Nos Tarifs" /> */}
            <p>L appllication</p>
            <p>Weeze Map</p>
            <p>Nos Tarifs</p>
            <p></p>
          </div>
        </div>

        <button className="nv_btn"> Me prenir lorsque sera disponible </button>
      </div>
     
    {/* </div> */}
    </Wrapper>
    // </div>
  );
}
