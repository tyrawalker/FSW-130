import './App.css';
import React from 'react'
import {addContact, removeContact} from './redux/contacts'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <div>{[props.person]}</div>

      <button>Add Contact</button>
      <button>Delete Contact</button>
    </div>
  );
}

function mapStateToProps (person){
  return {
       person: person
  }
}
 const mapDispatchToProps={
   addContact:addContact, 
   removeContact:removeContact

 }

export default connect (mapStateToProps, mapDispatchToProps) (App)
