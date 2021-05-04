import React from "react"
import UglyThing from "./components/uglything"
import AddForm from './components/UglyThingsForm'
import {ContextProvider} from './userContext'
import './App.css'

function App (){
  return(
    <div>       
      <ContextProvider>
        <AddForm/>
        <br></br>
        <UglyThing/>
      </ContextProvider>
    </div>
  )
}

export default App;
