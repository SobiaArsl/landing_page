import React from "react";
import "../Pages/Style.css";



export default function Link(props){
    return(
        <p className='nav_link'>{props.title}</p>

    );
}