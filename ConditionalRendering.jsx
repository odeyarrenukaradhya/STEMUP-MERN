import React from "react";
function Pass(){
    return <h1>Cogratulations🎉!!</h1>;
}
function Fail(){
    return <h1>Better luck next time</h1>;
}

// function ClassResult(props){
//     const isresult=props.isresult;
//     console.log(isresult);
    
//     if(isresult === true){
//         return <Pass/>;
//     }
//     if(isresult === false){
//     return <Fail/>;
//     }
// }


//-----------using Ternary operator-----------
function ClassResult(props){
    const isresult=props.isresult;
    return(
        <>{isresult ? <Pass/>:<Fail/>}</>
    );
}
export default ClassResult