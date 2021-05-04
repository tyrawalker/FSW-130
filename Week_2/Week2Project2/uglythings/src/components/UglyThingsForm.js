import React, {Component} from 'react'
import {ContextConsumer} from "../userContext"
import "../App.css"

//class component to consume state
 class AddForm extends Component{
    state= {
        concat:[],
        title:'', 
        image:'', 
        Description:'', 
        comments:[], 
        comment:'',
    }
 //handlechange scripting
    handleChange =(e) =>{
        const {name, value} = e.target
        this.setState({
            [name]:value,
        })
    }
 //add a new uglything function (new state)
    updateThing = (e, context) => {
        e.preventDefault()
        this.setState({
            concat:[
            ...context.uglyThings,     
            {
                title:this.state.title, 
                image:this.state.image, 
                Description:this.state.Description, 
                comments:this.state.comments,   
            }
        ],
            title:'', 
            image:'', 
            Description:'', 
            comments:[],
        })
     
    }
    //what i want seen on the page    
    render() {
         return(
            //using this.context becuase it it replicates the POST and adds a whole new item to the array or edits and sends to new array
            <ContextConsumer>
                {context =>(
                    <form className='addUglyThing'>
                    <input type= 'text' name= 'title' value={this.title} placeholder= "Title" onChange={this.handleChange}></input>
                    <input type= 'text' name= 'image' value= {this.image} placeholder= "Image URL" onChange= {this.handleChange}></input>
                    <input type='text' name= 'description' value= {this.Description} placeholder='Description' onChange= {this.handleChange}></input>
                    <input type= 'submit' onClick= {(e) =>{this.updateThing(e, context)}} value= 'submit'/>
                </form>
                )}
            </ContextConsumer>
            
    
         )}
            
      
}
export default AddForm; 