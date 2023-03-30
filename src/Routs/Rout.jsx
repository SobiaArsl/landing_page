import React from "react";
// import { BrowserRouter, Routs, Rout } from "react-router-dom";
import Navbar from "../component/Home/Navbar";
import Home from "../Pages/Home";
import Page1 from "../component/Home/Page1";
import Page2 from "../component/Home/Page2";
import Page3 from "../component/Home/Page3";
import Page4 from "../component/Home/Page4";
import Page5 from "../component/Home/Page5";
import Page6 from "../component/Home/Page6";
import Footer from "../component/Home/Footer";



export default function AppRouts() {
  return (
    <div>
      <Navbar />
      <Page1 />
      <Page5/>

      {/* <Page2/>
      <Page3/>
      <Page5/>
      <Page6/> */}
      {/* <Footer/> */}

    </div>
  );
}
