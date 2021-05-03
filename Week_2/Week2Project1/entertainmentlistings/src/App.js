import React from "react"
import Form from "./components/Form"
import MovieListing from "./components/MovieListing";
import {ContextProvider} from './userContext'



function App(){
  return(
    <div>
      <ContextProvider>
        <Form/>
        <MovieListing/>
      </ContextProvider>
     
    </div>
  )
}



export default App;
