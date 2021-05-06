import './App.css';
import React from 'react'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <h1>Contact List</h1>

      <button>Add Contact</button>
      <button>Delete Contact</button>
    </div>
  );
}

function mapStateToProps (globalState){
  return {
       
  }
}

export default connect (mapStateToProps, {}) (App)
