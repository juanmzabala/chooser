import React from "react";
import '../stylesheets/Start.css';

function Start(props){
    return(
        <button className="button-start" onClick={()=>props.start()}>ENTER NAMES</button>
        
    )
};

export default Start;


