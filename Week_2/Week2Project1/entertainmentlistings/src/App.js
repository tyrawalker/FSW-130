import React from "react"
import './App.css';
import MovieListing from "./components/movie";
import movie from './components/moviedata.json'
import {UserContextConsumer} from './userContext'


class App extends React.Component{
    state={
      newMovieListing:''
    }
    
  handleChange= (e)=>{
    const {MovieListing, value} = e.target
    this.setState({[MovieListing]:value})
  }

  render() {
    const movies = movie.map(movie =><MovieListing key= {movie.uri} uri={movie.uri} title= {movie.title}/>)

  return (  
    <div className="App">
      <UserContextConsumer>
        {/* {({MovieListing, addMovieTitle})=>()} */}

        <form className = "addForm"> 
                <input type = {Text} placeholder= "Movie Title" value={this.state.newTitle} onChange= {this.handleChange}></input>
                <input type = {URL} placeholder = "Picture URL" value= {this.state.newUrl} onChange= {this.handleChange}></input>
                <button onClick={()=>addMovieTitle(this.state.newMovieListing)}>Add Movie</button>
        </form>
        
           <br></br> 
        
        <div className = "grid-container">{movies}</div>
      </UserContextConsumer>
    </div>
  );
  }
      
}


export default App;
