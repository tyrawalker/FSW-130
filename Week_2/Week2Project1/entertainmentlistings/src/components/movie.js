import React from "react"

function MovieListing (props) {
    return (
        <div className= "movieBox">
            <img src={props.info.uri} alt ="icon"/>
            <h6>{props.info.title}</h6>
            <button>Delete</button>
        </div>
    )
}

//alt tags associated with images sometimes fail in components. 

export default MovieListing