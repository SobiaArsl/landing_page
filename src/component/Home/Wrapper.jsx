import React from 'react'
import "../../Pages/Style.css";

export default function Wrapper({children}) {
  return (
    <div className='stander_wrp' style={{
      background: "",
    }}>
      {children}
    </div>
  );
}
