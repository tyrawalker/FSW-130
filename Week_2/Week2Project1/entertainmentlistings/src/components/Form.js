import React from 'react'
import {ContextConsumer} from "../userContext"
import "../App.css"

function Form(){
    return (
        <ContextConsumer>
            {context =>(
                <div>
                 <form className = "addForm"> 
                 <input type = 'text' placeholder= "Movie Title" name= 'title'value={context.title} onChange= {context.handleChange}></input>
                 <input type = 'text' placeholder = "Picture URL" name='image' value={context.image} onChange= {context.handleChange}></input>
                 <input type= 'submit' onClick={(context.addMovieListing)} value='submit'/>
            </form>
            <br></br>
            </div>
            )}
        </ContextConsumer>
       
    )
}
 export default Form;
        