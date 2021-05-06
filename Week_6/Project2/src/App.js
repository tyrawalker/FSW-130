import React from 'react'
import './App.css';
import {connect} from "react-redux"
import {addMovie, removeMovie} from './redux/movies'
import {addTvShow, removeTvShow} from './redux/tvShows'


function App(props) {
  return (
    <div className="App">
      <h1>Movies and TV Shows</h1>
      <h2>{props.movies}</h2>
      <form className = "addMovie">
        <input type ='text'></input> 
        <button onClick = {props.addMovie}>Add Movie</button>
        <button onClick= {props.removeMovie}>Delete Movie</button>
      </form>
      <h2>{props.tvShows}</h2>
      <form className= "addTvShow">
        <input type = 'text'></input>
        <button onClick= {props.addTvShow}>Add Tv Show</button>
        <button onClick = {props.removeTvShow}>Remove Tv Show</button>
      </form>
      
      
    </div>
  );
}

function mapStateToProps(state) {
  return {
      state:{
        movies:[], 
        tvShows:[]
      }
  }
}

const mapDispatchToProps = {
  addMovie: addMovie,
  removeMovie:removeMovie,
  addTvShow:addTvShow, 
  removeTvShow:removeTvShow
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

