import React from "react"
import './App.css';
import UglyThing from "./components/uglything"
import uglyThing from './components/uglything.json'


class App extends React.Component {
  render(){ 
    const uglyThings = uglyThing.map(uglyThing =><UglyThing key= {uglyThing.image} title={uglyThing.title} description= {uglyThing.description}/>)

    return(
      

      <div className ="App">
        <form className= "addForm">
          <input type = {Text} placeholder="Image Url" ></input>
          <input type= {Text} placeholder="Title" ></input>
          <input type= {Text} placeholder= "Description"></input>
          <button>Submit</button>
        </form>
            <br></br>
        
        <div className= "grid-container">{uglyThings}</div>

      </div>
    )
  }}

export default App;
