import React from 'react'
import {Provider} from "react-redux"
import './App.css';
import ClickContainer from "./components/clickContainer"
import HooksClickContainer from './components/HooksClickContainer';
import store from './redux/store'


function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <ClickContainer/>
        <HooksClickContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
