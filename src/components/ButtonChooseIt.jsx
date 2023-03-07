import React from "react";
import '../stylesheets/ButtonChooseIt.css'
function ButtonChooseIt(props){
    return(
        <>
            <button onClick={()=>props.elegir()} className="button-choose-it">
                CHOOSE IT!</button>
        </>
    )
};

export default ButtonChooseIt;