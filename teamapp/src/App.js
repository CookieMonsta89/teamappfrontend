import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import firebase, { auth, provider } from "./firebase";
import Navigation from './componenets/individualComponents/navigation'
import HomeView from './componenets/containerViews/HomeView'
class App extends Component {


  render() {
    return (
      <div className="App">         
        <Navigation />   
        <HomeView />       
      </div>
    );
  }
}

export default App;
