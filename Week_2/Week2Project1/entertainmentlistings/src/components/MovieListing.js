import React from "react"
import '../App.css'
import {ContextConsumer} from "../userContext"

function MovieListing() {
    return (
        <ContextConsumer>
            {context =>(
                context.movies.map((movie, index)=>
                    <div>
                        <div className= "movieBox" id= {index} key= {movie}>
                            <div><img src={movie.image} alt="icon"></img></div>
                            <h6>{movie.title}</h6>
                         </div>
                    </div>
                    
                )
            )}
        </ContextConsumer>
    )
}

//alt tags associated with images sometimes fail in components. 

export default MovieListing