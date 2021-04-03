import React from "react"

function AddForm (Props){
    return (
        <div> 
            <form className = "addForm"> 
                <input type = {Text} placeholder= "Movie Title"></input>
                <input type = {URL} placeholder = "Picture URL"></input>
                <button>Add Movie</button>
            </form>
        </div>
    )
}

export default AddForm