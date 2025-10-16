import React from 'react'

function Parent1({studentName})  {
  return (
    <div style={{background:"#d4f1f4",margin:"10px",padding:"10px"}}>
      <h2>Parent Component</h2>
      <Child studentName={studentName}/>
    </div>
  );
}

//LEVEL 2
function Child({studentName})  {
  return (
    <div style={{background:"#a4ebf3",margin:"10px",padding:"10px"}}>
      <h3>Child Component</h3>
      <GrandChild studentName={studentName}/>
    </div>
  );
}

//LEVEL 3
function GrandChild({studentName})  {
  return (
    <div style={{background:"#66e0d4ff",margin:"10px",padding:"10px"}}>
      <h3>GrandChild Component</h3>
      <GreatGrandChild studentName={studentName}/>
    </div>
  );
}

//LEVEl 4
function GreatGrandChild({studentName})  {
  return (
    <div style={{background:"#189ab4", color:"white", margin:"10px",padding:"10px"}}>
      <h5>GreatGrandChild Component</h5>
      <p>
        👋Hello <b>{studentName}</b>, this value was passed from the app component through 3 other components!
      </p>
    </div>
  );
}

export default Parent1
 