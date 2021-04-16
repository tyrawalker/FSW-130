import React from "react"

function MovieListing (props) {
    return (
        <div className= "movieBox">
            
            <div><img src={props.image}alt="icon"></img></div>
            <h6>{props.title}</h6>
            
            
        </div>
    )
}

//alt tags associated with images sometimes fail in components. 

export default MovieListing