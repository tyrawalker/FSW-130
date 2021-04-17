import React from "react"

function UglyThing (props){
    return(
        <div>
            <img src={props.image}alt="icon"></img>
            <h6>{props.title}</h6>
            <h6>{props.description}</h6>
        </div>
    )
}

export default UglyThing