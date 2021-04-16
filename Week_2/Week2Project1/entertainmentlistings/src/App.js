import React from "react"
import './App.css';
import MovieListing from "./components/movie";
import movie from './components/moviedata.json'
//import UserContext from './userContext'


class App extends React.Component{
  constructor(){
    super()
    this.state= []

  //handlechange binding for button submission and deletion
}
  //handlechange
  render() {
    const movies = movie.map(movie =><MovieListing key= {movie.uri} uri={movie.uri} title= {movie.title}/>)

  return (  <div className="App">

      <div>

        <form className = "addForm"> 
                <input type = {Text} placeholder= "Movie Title"></input>
                <input type = {URL} placeholder = "Picture URL"></input>
                <button onClick>Add Movie</button>
        </form>
        
           <br></br> 
        
        <div className = "grid-container">{movies}</div>
        
      </div>


    </div>
  );
  }
      
}


export default App;
