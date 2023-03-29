import React, { useState } from "react";





export default function Home() {
    const [counts, setCounts] = useState(0);
    const sumAdd = () => {
      setCounts(counts + 1);
    };
    const Remove = () => {
      setCounts(counts - 1);
    };
  return( <div>
    <div>
        <h1>App</h1>
        <h2>{counts}</h2>
        <button onClick={sumAdd}>Add</button>
        <button onClick={Remove}>Remove</button>
      </div>
    < page1 />
    <page2/>
  
  </div>);
}