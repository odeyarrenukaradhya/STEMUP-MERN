import React from 'react'

function Son(props) {
  return (
    <div style={{background:"lightgreen",padding:"10px",margin:"10px"}}>
        <h2>Son</h2>
        <div>{props.children}</div> 
    </div>
  );
}

function Daughter({brand,model,children}) {
  return (
    <div style={{background:"lightblue",padding:"10px",margin:"10px"}}>
        <h2>Daughter{brand && `(${brand} ${model})`}</h2>
        <div>{children}</div>
    </div>
  );
}

function Parent() {
    return(
        <div>
            <h1>Your Two Children</h1>
            <Son>
                <p>This was written in the parent component , but displayed as a part of the son component</p>
            </Son>

            <Daughter brand="Apple" model="iphone 15">
                <p>This was written in the parent component , but displayed as a part of the Daughter component</p>
            </Daughter>
        </div>
    );
}
export default Parent
