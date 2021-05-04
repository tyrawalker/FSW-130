import React, {Component} from "react"
import {ContextConsumer} from "../userContext"
import '../App.css'

//class to consume and update context
class UglyThing extends Component {
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
          [name]: value,
        })
      }
        

        //add new comments
        addComments= (e, context, index) =>{
        this.setState({
            comments:[...context.uglyThings[index].comments, e.target.value], 
            comment:'',
        })
        var newArray = context.uglyThings
        Object.assign(newArray[index], {
            comments:[...context.uglyThings[index].comments, e.target.value],
        })
        context.editUglyThing(newArray) 
    
        
    } 
        render() {
            return(
                <ContextConsumer>
                    {(context) =>(
                     context.uglyThings.map((uglyThings, index) =>
    
                      <div className= 'things-wrapper' id={index} key={uglyThings}>
                            <img src={uglyThings.image} alt="icon"></img>
                            <h6>{uglyThings.title}</h6>
                            <h6>{uglyThings.Description}</h6>
    
                            <br></br>
                            {/*add comment form within things-wrapper*/}
                            <form className= "editions">
                                <input type = 'text' name= "comment" placeholder= "Add Comments" onChange= {this.handleChange} onKeyPress= {(e)=> {
                                    if (e.key === 'Enter'){
                                        this.addComments(e, context, index)
                                    }
                                }}></input>

                                <button>Delete</button>
                                
                                
                            </form>
                        </div>
                    )
                    )}
                </ContextConsumer>
           
            )        
        }
    }
    


export default UglyThing;