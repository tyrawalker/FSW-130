import React from "react"
import AddForm from "./components/form";
import MovieListing from "./components/movie";
import movie from "./components/moviedata"
import './App.css';

function App(){
  const movie = movie.map()

  return (  <div className="App">

      <div className = "form">
        <AddForm/>
    
      </div>

      <div className= "grid-container">
                
      </div>
    </div>
  );)
}
}

export default App;
